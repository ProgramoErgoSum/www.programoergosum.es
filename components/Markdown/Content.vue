<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="DynamicMarkdown" v-html="renderer" />
</template>

<script>
import markdownIt from 'markdown-it'
import toc from 'markdown-it-toc-and-anchor'
import hljs from 'highlight.js'
import 'highlight.js/styles/xcode.css'

export default {
  name: 'Content',
  components: {},
  props: {
    raw: {
      type: String,
      required: true
    },
    cdn: {
      type: String,
      default: ''
    }
  },
  computed: {
    // Doc: https://github.com/markdown-it/markdown-it
    renderer() {
      const cdn = this.cdn
      const md = markdownIt('commonmark', {
        html: true,
        xhtmlOut: true,
        breaks: true,
        langPrefix: 'language-',
        linkify: true,
        typographer: true,
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) {}
          }
          return ''
        }
      }).enable(['table'])

      md.use(toc, {
        anchorLink: false
      })

      // Lazy images and cdn
      md.renderer.rules.image = function(tokens, idx, options, env, slf) {
        const token = tokens[idx]
        const src = '/lazy.png'
        let dataSrc = ''
        let alt = ''
        token.attrs = token.attrs.map(attr => {
          if (attr[0] === 'src') {
            if (attr[1].substring(0, 4) !== 'http') {
              attr[1] = `${cdn}${attr[1]}`
            }
            dataSrc = attr[1]
          }

          if (attr[0] === 'title' && attr[1] !== '') alt = attr[1]

          return attr
        })
        return `<figure><img class="lazy" src="${src}" data-src="${dataSrc}" alt="${alt}"><figcaption>${alt}</figcaption></figure>`
      }

      md.renderer.rules.html_block = function(tokens, idx, options, env, slf) {
        const content = tokens[idx].content
        if (content.includes('youtube.com/embed')) {
          const res = content.split('youtube.com/embed/')
          const url = res[1].split('"')
          const code = url[0]
          return `<div class="youtube"><a href="https://youtube.com/embed/${code}" target="_blank"><img src="https://i.ytimg.com/vi_webp/${code}/maxresdefault.webp" /><i class="v-icon mdi mdi-youtube"></i></a></div>`
        }

        return tokens[idx].content
      }

      // Renderer a internals links in markdown
      md.renderer.rules.link_open = function(tokens, idx, options, env, slf) {
        return (
          '<a target="_blank" rel="nofollow noopener noreferrer"' +
          slf.renderAttrs(tokens[idx]) +
          '>'
        )
      }
      md.renderer.rules.link_close = function() {
        return '<i aria-hidden="true" class="v-icon notranslate pl-1 mdi mdi-open-in-new" style="font-size:12px;"></i></a>'
      }

      return md.render(this.raw)
    }
  },
  mounted() {
    // Doc: https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
    const lazyImages = [].slice.call(
      document.querySelectorAll('.DynamicMarkdown img.lazy')
    )
    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            // lazyImage.srcset = lazyImage.dataset.srcset
            lazyImage.classList.remove('lazy')
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage)
      })
    }
  }
}
</script>

<style lang="scss">
.DynamicMarkdown {
  font-size: 20px;
  h1 {
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.2em;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-size: 1.7rem;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
  }
  h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 600;
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 500;
  }
  br {
    margin: 20px 0;
  }
  a {
    text-decoration: none;
    border-bottom: 1px dotted #000;
    color: #333;
    &:hover {
      color: #ae4119;
    }
  }
  p {
    margin: 0 0 30px;
    strong {
      font-weight: 600;
    }
    em {
      font-style: italic;
    }
  }
  ul {
    display: block;
    margin: 0 0 30px 30px;
    padding: 0;
    li {
      display: block;
      margin-bottom: 10px;
      list-style: none;
      &:before {
        padding: 0 15px 0 0;
        content: '\2022';
      }
    }
  }
  blockquote {
    margin: 0 0 30px;
    padding: 10px 10px 10px 20px;
    border-left: 3px solid #999;
    background: #f0f0f0;
    color: #1e2125;
    font-style: italic;
    font-size: 1.1rem;
    p {
      margin: 0;
      code {
        padding: 0 5px;
        line-height: 1rem;
      }
    }
  }
  .twitter-tweet {
    margin: 0 auto;
  }
  code {
    padding: 1px 3px;
    background: #f0f0f0;
    color: #1e2125;
    font-weight: normal;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 3px;
  }
  pre {
    display: block;
    margin: 0 0 30px;
    font-size: 18px;
    white-space: pre-wrap;
    word-wrap: pre-wrap;
    code {
      display: block;
      position: relative;
      padding: 20px;
      // background: #e0e0e0;
      border-radius: 2px 2px 0 0;
      // language-sh
      &.language-sh {
        border: 3px solid #555;
        border-top: 30px solid #555;
        background: #1e2125;
        color: #fff;
      }
      &.language-sh::before {
        top: -18px;
        left: 15px;
        width: 7px;
        height: 7px;
        background: #777;
        border-radius: 50%;
        box-shadow: 0 0 0 3px #777, 24px 0 0 3px #777, 48px 0 0 3px #777;
      }
      // language-python
      &.language-python {
        border: 3px solid #daaa00;
        border-top: 30px solid #daaa00;
      }
      &.language-python::before {
        content: 'Python';
        color: #f0f0f0;
      }
      // language-arduino
      &.language-arduino {
        border: 3px solid #00979d;
        border-top: 30px solid #00979d;
      }
      &.language-arduino::before {
        content: 'Arduino';
        color: #f0f0f0;
      }
      // language-html
      &.language-html {
        border: 3px solid #616161;
        border-top: 30px solid #616161;
      }
      &.language-html::before {
        content: 'HTML';
        color: #f0f0f0;
      }
      &:before {
        display: block;
        position: absolute;
        top: -25px;
        left: 15px;
        content: '';
      }
      &:after {
        content: none;
      }
    }
  }
  table {
    margin: 0 0 30px;
    font-size: 1rem;
    line-height: 1.5rem;
    tr,
    th,
    td {
      padding: 10px;
      border: 1px solid #f0f0f0;
    }
    th {
      background: #f0f0f0;
    }
  }
  figure {
    margin: 20px auto 50px;
    text-align: center;
    img {
      max-width: 100%;
    }
    figcaption {
      text-align: center;
      font-size: 14px;
      font-weight: 300;
    }
  }
  hr {
    display: block;
    margin: 60px 0;
    border: 1px solid #f0f0f0;
  }
  .iframe {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    margin: 20px auto 50px;
    border: 20px solid #333;
    border-radius: 20px;
  }
  .iframe iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    border: 0;
  }
  .youtube {
    position: relative;
    width: 100%;
    min-height: 300px;
    margin: 20px auto 50px;
    border: 20px solid #333;
    border-radius: 20px;
    a {
      position: relative;
      display: block;
      img {
        display: block;
        width: 100%;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20rem;
        color: #e52d27;
        &:hover {
          color: #b31217;
        }
      }
    }
  }
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
}
@media only screen and (max-width: 960px) {
  .DynamicMarkdown {
    ul {
      margin: 0 0 30px 0;
    }
  }
}
@media only screen and (max-width: 600px) {
  .DynamicMarkdown {
    ul {
      margin: 0 0 30px 0;
    }
    font-size: 16px;
    h1 {
      font-size: 1.6em;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
}
</style>
