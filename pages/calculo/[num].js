import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const tabla = () => {
    const router = useRouter();
    const { num } = router.query;
    const { por } = router.query;
    const { entre } = router.query;
    let tablaMultiplicar = [];
    let resultado = 0;

    const calcularTabla = () => {
        for (let i = 1; i <= 10; i++) {
            tablaMultiplicar.push(`${num} x ${i} = ${num * i}`);
        }
    }

    const calculos = () => {
        calcularTabla();
        realizarOperacion();
    }

    const realizarOperacion = () => {
        if (por != undefined) {
            resultado = num * por;
        } else if (entre != undefined) {
            resultado = num / entre;
        }
    }

    return (
        <div className='container mt-5 pt-5 w-25' onLoad={calculos()}>
            <div className='row'>
                <Link href='/' className='col ml-3'>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Link>
                {por == undefined && entre == undefined && <h1 className='ml-5 pl-5 col'>Tabla del {num}</h1>}
                {por != undefined && <h1 className='ml-5 pl-5 col'>Producto</h1>}
                {entre != undefined && <h1 className='ml-5 pl-5 col'>División</h1>}
            </div>
            <ul className='list-group mt-3'>
                {por == undefined && entre == undefined && tablaMultiplicar.map((tabla, index) => {
                    return (<li className='list-group-item text-center' key={index}>{tabla}</li>);
                })}
                {por != undefined && <li className='list-group-item text-center' key={resultado}>{num} x {por} = {resultado}</li>}
                {entre != undefined && <li className='list-group-item text-center' key={resultado}>{num} / {entre} = {resultado}</li>}
            </ul>
        </div>
    )
}

export default tabla;