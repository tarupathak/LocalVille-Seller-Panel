import Logo from "../Assets/logo.svg";
import Profile from "../Assets/Profile Image.png";
import notification from '../Assets/notification.svg'


const Topbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="Localville Logo" className="navbar_img" />
			</div>
			<div className="nav-content">
				<div className="notify-text">
					<img src={notification} alt="notification"/>
					Notification
				</div>
				<div className="notify-profile">
					<img src={Profile} alt="Localville Logo" className="profile-logo" />
					<div className="notify-profile-contents">
						<h4>Name</h4>
						<p>Email</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
