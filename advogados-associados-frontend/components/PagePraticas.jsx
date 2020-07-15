import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import SectionPraticas from './SectionPraticas'
import SectionPraticasLinha from './SectionPraticasLinha'
import SectionContato from './SectionContato'

export default function PagePraticas() {

  const [listPractices, setListPractices] = useState([])

  useEffect(
    () => {
        async function loadingPractice() {

            //fazendo conexão com a API e BANCO DE DADOS
            //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
            const response = await axios.get(URL_API + '/practices')
            
            console.log(response.data)
            setListPractices(response.data)

        }

        loadingPractice()
    }
    , [])

  return (
    <section className="praticas">
      <section className="hero is-medium is-bold img-full-insise bg-cover" data-animate="bottom">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-white">
              Práticas Jurídicas
            </h1>
            <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
              Por que somos os premiados Escritório de advocacia
            </p>
            <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#" className="is-active" aria-current="page">Práticas Jurídicas</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="section" data-animate="right">
        { 
          listPractices.slice(0, 1).map(
            item => {
              if(!item.showingoff) return null
              return(
                <SectionPraticas {...item} key={ item.id } />
              )
            }
          )
        }
      </section>
      <section className="section" data-animate="left">
        <div className="container">
          <h1 className="title is-size-2 is-size-3-mobile has-text-centered pb-5" >
            Algumas de nossas Práticas Juridicas mais procuradas
          </h1>
          <div className="columns">
            <div className="column">
              <div className="card boxshadowborder">
                <div className="card-content has-text-centered">
                  <span className="is-size-1"><i className="fas fa-gavel"></i></span>
                  <h1 className="has-text-weight-bold is-size-4">Direito Imobiliário</h1>
                  <p className="title is-size-6">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle is-size-7">
                    Jeff Atwood
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card boxshadowborder">
                <div className="card-content has-text-centered">
                  <span className="is-size-1"><i className="fas fa-gavel"></i></span>
                  <h1 className="has-text-weight-bold is-size-4">Direito Imobiliário</h1>
                  <p className="title is-size-6">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle is-size-7">
                    Jeff Atwood
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card boxshadowborder">
                <div className="card-content has-text-centered">
                  <span className="is-size-1"><i className="fas fa-gavel"></i></span>
                  <h1 className="has-text-weight-bold is-size-4">Direito Imobiliário</h1>
                  <p className="title is-size-6">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle is-size-7">
                    Jeff Atwood
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="card boxshadowborder">
                <div className="card-content has-text-centered">
                  <span className="is-size-1"><i className="fas fa-gavel"></i></span>
                  <h1 className="has-text-weight-bold is-size-4">Direito Imobiliário</h1>
                  <p className="title is-size-6">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle is-size-7">
                    Jeff Atwood
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card boxshadowborder">
                <div className="card-content has-text-centered">
                  <span className="is-size-1"><i className="fas fa-gavel"></i></span>
                  <h1 className="has-text-weight-bold is-size-4">Direito Imobiliário</h1>
                  <p className="title is-size-6">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle is-size-7">
                    Jeff Atwood
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card boxshadowborder">
                <div className="card-content has-text-centered">
                  <span className="is-size-1"><i className="fas fa-gavel"></i></span>
                  <h1 className="has-text-weight-bold is-size-4">Direito Imobiliário</h1>
                  <p className="title is-size-6">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle is-size-7">
                    Jeff Atwood
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium is-bold" data-animate="bottom">
      { 
        listPractices.slice(1).map(
            item => {
              if(!item.showingoff) return null
              return(
                <SectionPraticasLinha {...item} key={ 'Practices' + item.id } />
              )
            }
          )
        }
      </section>
      <section className="section" data-animate="left">
        <SectionContato />
      </section>
    </section>
  )
}
