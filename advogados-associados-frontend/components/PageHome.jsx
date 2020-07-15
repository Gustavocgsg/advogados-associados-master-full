import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

import SectionEquipe from './SectionEquipe'

export default function PageHome() {
  return (
    <section>
          <section className="hero is-large is-bold img-full-index bg-cover" data-animate="bottom">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-white">
                  Ajudando os Negócios
                </h1>
                <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
                  Os negócios exigem uma sólida formação legislativa para funcionar bem.
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
                <div className="column has-text-centered-desktop has-text-centered-mobile" data-animate="bottom">
                  <h1 className="title is-size-4-mobile is-size-2-desktop pb-5">Por que você pode confiar na Advogados Associados: Nossos valores </h1>
                  <p className="subtitle is-size-6-mobile is-size-5-desktop">Valorizamos a justiça, a honestidade e o tempo. Estamos sempre ao seu dispor, pois somos responsáveis pela sua defesa. Qualquer detalhe será notado e poderá ser essencial para o seu caso.</p>
                  <p className="subtitle is-size-6-mobile is-size-5-desktop">Durante nosso trabalho, reunimos uma equipe de especialistas dedicados, com vasta experiência em ajuda jurídica. Damos grande ênfase ao direito comercial, porque no ambiente de rápida mudança de hoje, as pessoas precisam de assistência nas esferas comerciais. Nossa experiência nos permite ter confiança e defender nossas palavras.</p>
                  <p className="subtitle is-size-6-mobile is-size-5-desktop">Nossa empresa foi criada em 1998. Começamos como uma pequena consultoria jurídica. Nós provamos nossa competência e tivemos muitos clientes satisfeitos. Expandimos nossa atividade e começamos a fornecer muitos outros serviços jurídicos para atender às necessidades mais amplas dos clientes.</p>
                </div>
            </div>  
          </section>
          <section className="hero is-medium is-bold ">
            <div className="hero-body img-full-linha-index" data-animate="bottom">
              <div className="container has-text-centered">
                <h1 className="title is-size-3 is-size-4-mobile pb-5 has-text-white">
                  20 anos de experiência em diversos casos
                </h1>
                <h2 className="subtitle is-size-5 is-size-6-mobile has-text-white">
                  Estamos orgulhosos de que nosso escritório de advocacia ofereça serviços jurídicos de alto nível por um preço acessível em todo o país! Conosco, você nunca sentirá que os advogados são apenas ladrões de terno, além disso, vencemos 98% de todos os casos. Portanto, conosco, suas chances de ganhar são as mais altas possíveis!
                </h2>
                <div className="columns pt-5">
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">1998</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">ANO DE ESTABELECIMENTO</h5>
                  </div>
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">547</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">CASOS GANHOS</h5>
                  </div>
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">+45</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">PARCERIAS</h5>
                  </div>
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">1500</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">CONFIANÇA DOS CLIENTES</h5>
                  </div>
                </div>              
              </div>
            </div>
          </section>
          <section className="section" data-animate="left">
            <SectionEquipe />
          </section>
          <section className="hero is-medium is-dark is-bold" data-animate="bottom">
            <div className="hero-body">
              <div className="container has-text-centered-desktop has-text-centered-mobile">
                  <h1 className="title is-size-3 is-size-4-mobile pb-5">
                  Notícias Recentes
                  </h1>
                  <div className="columns pt-5">
                    <div className="column has-text-left-desktop has-text-centered-mobile px-6">
                        <h4 className="title is-size-5 is-size-6-mobile">Categoría</h4>
                        <h3 className="title is-size-3 is-size-5-mobile py-3">Lorem ipsum dolor sit amet</h3>
                        <p className="subtitle is-size-6 is-size-7-mobile is-bold">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non est magna. Phasellus pharetra quam urna, eget lacinia lorem consectetur et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sed justo placerat, faucibus metus vel, cursus magna. 
                        </p>
                        <a className="button is-dark is-inverted">
                          <span className="icon">
                            <i className="fas fa-newspaper"></i>
                          </span>
                          <span>Restrito</span>
                        </a>
                    </div>
                    <div className="column has-text-left-desktop has-text-centered-mobile px-6">
                      <h4 className="title is-size-5 is-size-6-mobile">Categoría</h4>
                      <h3 className="title is-size-3 is-size-5-mobile py-3">Lorem ipsum dolor sit amet</h3>
                      <p className="subtitle is-size-6 is-size-7-mobile is-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non est magna. Phasellus pharetra quam urna, eget lacinia lorem consectetur et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sed justo placerat, faucibus metus vel, cursus magna. 
                      </p>
                      <a className="button is-dark is-inverted">
                        <span className="icon">
                          <i className="fas fa-newspaper"></i>
                        </span>
                        <span>Restrito</span>
                      </a>
                  </div>
                  <div className="column has-text-left-desktop has-text-centered-mobile px-6">
                    <h4 className="title is-size-5 is-size-6-mobile">Categoría</h4>
                    <h3 className="title is-size-3 is-size-5-mobile py-3">Lorem ipsum dolor sit amet</h3>
                    <p className="subtitle is-size-6 is-size-7-mobile is-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non est magna. Phasellus pharetra quam urna, eget lacinia lorem consectetur et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sed justo placerat, faucibus metus vel, cursus magna. 
                    </p>
                    <a className="button is-dark is-inverted">
                      <span className="icon">
                        <i className="fas fa-newspaper"></i>
                      </span>
                      <span>Restrito</span>
                    </a>
                </div>             
              </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container" data-animate="left">
              <h1 className="title is-size-2 is-size-3-mobile has-text-centered pb-5">
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
    </section>
  )
}
