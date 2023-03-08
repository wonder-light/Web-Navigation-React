import { publicUrl } from '../../api/env'

export default function Page404(props) {
    let att = props ? structuredClone(props) : {};
    att.style = Object.assign({
        width: '100%',
        height: '100vh',
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    }, att.style ?? {})
    return <div { ...att }>
        <img src={ `${ publicUrl }/img/404.svg` } alt="404"/>
    </div>
}