import { URL_API } from '../utils/config'
import Link from 'next/link'

export default function SectionNoticia(props) {
    console.log(props)
    return (       
    <div className="container is-light">
        <div className="columns boxshadow mb-5">
            <div className="column is-3">
                <figure className="image is-3by2 is-480x320">
                    <img src={ URL_API + '/news/images/' + props.fileimg } width="100%" />
                </figure>
            </div>
            <div className="column is-9">
            <Link href={ "/noticiasInterna?id=" + props.id }>
                <a href="#">
                    <p className="title has-text-weight-bold is-size-4 is-size-5-mobile pb-4">{ props.maintitle }</p>
                    <p dangerouslySetInnerHTML={ {__html: props.new } } className="subtitle is-size-5 is-size-6-mobile text-notice-space-list"></p>
                </a>
            </Link>
            </div>
        </div>
    </div>
    )
}