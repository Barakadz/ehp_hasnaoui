import Link from "next/link";
import { useRouter } from 'next/router';

const SideBarDashboard = () => {
    const router = useRouter();

    return (
        <>

            <div id="viewport">
                <div id="sidebar">
                    <header>
                        <a href="#">EHP HASNAOUI</a>
                    </header>
                    <ul class="nav ">
                    
                        <Link legacyBehavior href="/admin"  ><li className= {router.pathname === '/admin' ? 'act ' : '  '}>
                            <i class="icofont-dashboard text-white"></i> Dashboard
                        </li></Link>

                        <Link legacyBehavior href="/rendez"  ><li className= {router.pathname === '/rendez' ? 'act ' : '  '}>
                        <i class="icofont-ui-calendar text-white"></i> RendezVous
                        </li></Link>

                     

                        <Link href="/dash"><li>
                            <i class="icofont-ui-copy text-white"></i> Actualités
                        </li></Link>

                        <Link href="/dash"><li>
                            <i class="icofont-search-job text-white"></i>Offres d'emplois
                        </li></Link>

                        <Link href="/dash"><li>
                            <i class="icofont-ui-image text-white"></i>Galerie
                        </li></Link>



                    </ul>
                </div>
                <div id=" ">
                    <nav class="">
                        <div class="container-fluid">
                            <div className="topbarrr">
                                <div><img src="logo.png" width={200} />
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="imagelogin.png" width={50} alt="..." />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <strong>Admin EHPH </strong>  </div>
                                </div>
                            </div>
                        </div>
                    </nav>





                </div>
            </div>
        </>
    )
}

export default SideBarDashboard;