import styles from "./styles.module.css";
import { Link } from "react-router-dom";



const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	

	

	return (
		<div className={styles.main_container}>
			
			<nav className={styles.navbar}>
				<h1>URL Shortener</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Link to="/Urlcomp">
						<button className={styles.green_btn}>Convertor</button>
					</Link>
			
					
					
		</div>
	);
};

export default Main;