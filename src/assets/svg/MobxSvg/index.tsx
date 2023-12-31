import styles from './styles.module.scss';
import ten from '../../symbols/ways-of-the-qilin_h_pouch.png'

interface SymbolSvgProps {
  animate?: boolean;
}

const MobxSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img src={ten} className={animate ? styles.icon : ''} width="70px" height="70px" alt="" />

    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   className={animate ? styles.icon : ''}
    //   viewBox="0 0 256 256"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="m256 236.39v-216.79c0-8.894-5.923-16.4-14.037-18.8l-9.215 5.514-102.26 109.04-3.206 10.021-1.873 9.62 31.89 119.18 4.933 1.82h74.167c10.828 0 19.606-8.777 19.606-19.605"
    //     fill="#EA6618"
    //   />
    //   <path
    //     d="M0 19.606v216.787c0 6.705 3.367 12.62 8.5 16.155l6.287-3.01 108.246-115.894 4.244-8.265.159-7.99L97.976 5.306 93.513 0H19.606C8.778 0 0 8.778 0 19.606"
    //     fill="#d65813"
    //   />
    //   <path
    //     d="M127.277 125.38L241.963.806a19.595 19.595 0 0 0-5.57-.807H93.515l33.763 125.38z"
    //     fill="#e05e11"
    //   />
    //   <path
    //     d="m19.606 256h142.62l-34.951-130.62-118.78 127.17a19.511 19.511 0 0 0 11.107 3.451"
    //     fill="#de5c16"
    //   />
    //   <path
    //     d="m94.918 97.03h14.225c5.668 21.386 12.119 40.152 19.316 57.085 8.152-19.05 14.127-37.83 19.185-57.086h13.442c-6.02 23.926-15.868 48.04-27.132 72.93h-11.89c-10.82-23.586-20.03-47.837-27.146-72.93zm-46.92-37.055h31.63v135.64h-31.77v-10.456h19.472v-115h-19.332v-10.177zm160.17 10.177h-19.332v115h19.47v10.456h-31.769v-135.64h31.63v10.177z"
    //     fill="#FFF"
    //   />
    // </svg>
  );
};

export { MobxSvg };
