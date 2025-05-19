import MainNavbar from '../components/MainNavbar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                {/*  Componente che ha lo scopo da fare segnaposto, quando clicchiamo su una voce, quella voce si va a posizionare lì dentro*/}
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout