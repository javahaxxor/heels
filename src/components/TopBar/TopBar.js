
import './TopBar.scss';
import IconButton from '@material-ui/core/IconButton';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

function TopBar() {
  return (
    <header className="header">
      <div>Häleriet</div>
      <IconButton color="secondary" aria-label="contact us" type="phone">
        <PhoneOutlinedIcon />
      </IconButton>
    </header>
  );
}

export default TopBar;
