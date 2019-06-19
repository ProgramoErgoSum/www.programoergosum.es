<template>
  <vue-markdown
    class="markdown"
    :toc="true"
    :toc-first-level="1"
    :toc-anchor-link="false"
    :source="content"
  />
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Content',
  components: {
    VueMarkdown
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.markdown {
  font-size: 18px;
  h1 {
    margin-bottom: 20px;
    font-size: 1.8em;
    font-weight: 600;
    line-height: 50px;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.7rem;
    font-weight: 700;
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 600;
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 500;
  }
  a {
    text-decoration: underline;
    color: #333;
    &:hover {
      color: #111;
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
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.5rem;
    p {
      margin: 0;
      code {
        padding: 0 5px;
        line-height: 1rem;
      }
    }
  }
  code {
    padding: 1px 3px;
    background: #f0f0f0;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 200;
    color: #2d2d2d;
    background: #f0f0f0;
    border-radius: 3px;
  }
  pre {
    display: block;
    margin: 0 0 30px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.6rem;
    white-space: pre-wrap;
    word-wrap: pre-wrap;
    code {
      display: block;
      position: relative;
      padding: 1.6rem;
      line-height: 2rem;
      background: #e0e0e0;
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
  img {
    display: block;
    max-width: 100%;
    margin: 20px auto 30px;
  }
  hr {
    display: block;
    margin: 60px 0;
    border: 1px solid #f0f0f0;
  }
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
}
@media only screen and (max-width: 960px) {
}
@media only screen and (max-width: 600px) {
  .markdown {
    ul {
      margin-left: 0;
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
