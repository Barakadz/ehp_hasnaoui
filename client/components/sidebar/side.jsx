import Link from "next/link";
import { useRouter } from 'next/router';
const Side=()=>{
    const router = useRouter();

    return(
        <>
        <div id="sidebar">
                    <header>
                        <a href="#">EHP HASNAOUI</a>
                    </header>
                    <ul class="nav ">
                    
                        <Link legacyBehavior href="/admin"  ><li className= {router.pathname === '/admin' ? 'act ' : '  '}>
                            <i class="icofont-dashboard text-white"></i> Dashboard
                        </li></Link>

                        <Link legacyBehavior href="/rendezvous"  ><li className= {router.pathname === '/rendezvous' ? 'act ' : '  '}>
                        <i class="icofont-ui-calendar text-white"></i> RendezVous
                        </li></Link>
                        <Link legacyBehavior href="/act"  ><li className= {router.pathname === '/act' ? 'act ' : '  '}>
                        <i class="icofont-ui-copy text-white"></i> Actualités
                            </li></Link>
                            
 

                            <Link legacyBehavior href="/offres"  ><li className= {router.pathname === '/offres' ? 'act ' : '  '}>
                        <i class="icofont-ui-copy text-white"></i> Offres d'emploi

                            </li></Link>

                        <Link legacyBehavior href="/admingalerie"  ><li className= {router.pathname === '/admingalerie' ? 'act ' : '  '}>
                        <i class="icofont-ui-copy text-white"></i> Galerie
                            </li></Link>

                            <Link legacyBehavior href="/adminmedecin"  ><li className= {router.pathname === '/adminmedecin' ? 'act ' : '  '}>
                        <i class="icofont-ui-copy text-white"></i> Medecin
                            </li></Link>
<h4 className="text-white mx-3 mt-2">Application Mobile :</h4>
                            <Link legacyBehavior href="/adminusermobile"  ><li className= {router.pathname === '/adminusermobile' ? 'act ' : '  '}>
                        <i class="icofont-ui-copy text-white"></i> Utilisateurs
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
        </>
    )
}

export default Side;