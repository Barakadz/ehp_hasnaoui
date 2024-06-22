import Link from "next/link";
import { useRouter } from 'next/router';
import { FaUser } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { MdMedicalInformation } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";


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
                        <RiDashboard3Line  color="white" fontSize={20} className="mx-2"/>
                        Dashboard
                        </li></Link>

                        <Link legacyBehavior href="/rendezvous"  ><li className= {router.pathname === '/rendezvous' ? 'act ' : '  '}>
                        <FaCalendarAlt color="white" fontSize={20} className="mx-2"/>
RendezVous
                        </li></Link>
                        <Link legacyBehavior href="/act"  ><li className= {router.pathname === '/act' ? 'act ' : '  '}>
                        <FaNewspaper  color="white" fontSize={20} className="mx-2"/>
Actualités
                            </li></Link>
                            
 

                            <Link legacyBehavior href="/offres"  ><li className= {router.pathname === '/offres' ? 'act ' : '  '}>
                            <MdMedicalInformation color="white" fontSize={20} className="mx-2"/>

                        Offres d'emploi

                            </li></Link>

                        <Link legacyBehavior href="/admingalerie"  ><li className= {router.pathname === '/admingalerie' ? 'act ' : '  '}>
                        <FaImages color="white" fontSize={20} className="mx-2"/>
 Galerie
                            </li></Link>

                            <Link legacyBehavior href="/adminmedecin"  ><li className= {router.pathname === '/adminmedecin' ? 'act ' : '  '}>
                            <FaHospital color="white" fontSize={20} className="mx-2"/>
                            Medecin
                            </li></Link>
                            <Link legacyBehavior href="/adminmedecin"  ><li className= {router.pathname === '/adminmedecin' ? 'act ' : '  '}>
                            <FaMedal color="white" fontSize={20} className="mx-2"/>
                            Remises médicales
                            </li></Link>
<h5 className="text-white mx-4 mt-2">Application Mobile :</h5>
                            <Link legacyBehavior href="/adminusermobile"  ><li className= {router.pathname === '/adminusermobile' ? 'act ' : '  '}>
                            <FaUser color="white" fontSize={20} className="mx-2"/>
                            Utilisateurs
                            </li></Link>
                            <Link legacyBehavior href="/notifications"  ><li className= {router.pathname === '/notifications' ? 'act ' : '  '}>
                            <IoMdNotifications         color="white" fontSize={20} className="mx-2"/>
                            Notifications
                            </li></Link>
                            <Link legacyBehavior href="/version"  ><li className= {router.pathname === '/version' ? 'act ' : '  '}>
                            <FaGooglePlay  color="white" fontSize={20} className="mx-2"/>
                            Version App
                            </li></Link>
                            <Link legacyBehavior href="/ambulance"  ><li className= {router.pathname === '/ambulance' ? 'act ' : '  '}>
                            <FaAmbulance  color="white" fontSize={20} className="mx-2"/>
                            Ambulance Routes
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