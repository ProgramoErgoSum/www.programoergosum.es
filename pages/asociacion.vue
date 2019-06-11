<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex shrink>
        <section>
          <h1>Asociación Programo Ergo Sum</h1>
          <p>
            La Asociación Programo Ergo Sum es una iniciativa sin ánimo de lucro
            que pretende acercar la programación de ordenadores, videojuegos y
            aplicaciones a todas las edades, utilizando la programación
            informática y en concreto la programación de videojuegos como medio
            para el desarrollo de otras competencias (matemáticas, física,
            inglés, etc.), y no solo como un fin.
          </p>
          <p>
            Apostamos por una forma diferente de educación a través de cursos
            online gratuitos de programación y nuevas tecnologías en todos los
            niveles. También tenemos un compromiso social ya que no queremos que
            ningún niño o niña se quede fuera de este movimiento, y por ello
            realizamos talleres y eventos gratuitos en Murcia.
          </p>
        </section>
        <section>
          <h3>¿Cuáles son nuestros fines?</h3>
          <p>
            Los fines de la Asociación Programo Ergo Sum tenderán a promover el
            interés general y, en concreto, serán los siguientes:
          </p>
          <ul>
            <li>
              El fomento y enseñanaza de la informática, la programación, la
              electrónica, la robótica y las nuevas tecnologías de la
              información a niños, jóvenes y adultos.
            </li>
            <li>
              Sensibilizar y concienciar sobre la importancia de la programación
              desde edades tempranas.
            </li>
            <li>
              Utilizar las nuevas tecnologías de la información y la informática
              en beneficio de las relaciones sociales y educativas de niños,
              jóvenes y adultos.
            </li>
            <li>
              El fomento de hábitos de vida responsable en niños y jóvenes a
              través de la educación en las nuevas tecnologías de la
              información.
            </li>
            <li>
              Prestar servicios a la juventud, especialmente los relacionados
              con el desarrollo de los fines detallados arriba en sus diversas
              expresiones.
            </li>
            <li>
              Cualesquiera otros fines que redunden en beneficio de la
              ciudadanía en general.
            </li>
          </ul>
        </section>
        <section>
          <h3>¿Cuáles son nuestras actividades?</h3>
          <p>
            Para el cumplimiento de los fines del artículo anterior, la
            Asociación podrá promover y organizar las siguientes actividades:
          </p>
          <ul>
            <li>
              Actividades formativas y educativas en sentido amplio.
            </li>
            <li>
              Actividades relacionadas con el ocio y tiempo libre en general.
            </li>
            <li>
              Actividades de sensibilización y concienciación social.
            </li>
            <li>
              Y, en definitiva, todas aquellas que favorezcan el desarrollo y la
              participación de aquellos que quieran fomentar la cultura en la
              vida comunitaria.
            </li>
          </ul>
          <p>
            Al pretender los fines de la asociación, promover objetivos de
            interés general, las actividades que se realicen así como los
            beneficios que conlleven no afectarán solamente a los asociados sino
            que estarán abiertas a cualquier otro beneficiario que reúna las
            condiciones y caracteres exigidos en función de los fines de la
            asociación.
          </p>
        </section>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    const title = process.env.title
    const description = process.env.description
    const keywords = process.env.keywords
    const image = process.env.image
    const url = process.env.canonical + this.$route.path
    return {
      title: title,
      meta: [
        { rel: 'canonical', href: url },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 50px;
  h1 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
  }
  p,
  ul {
    margin-bottom: 20px;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>
