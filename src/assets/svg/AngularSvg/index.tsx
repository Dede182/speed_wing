import styles from './styles.module.scss';
import maraca from '../../symbols/ProsperityLion_Drum.png'

interface SymbolSvgProps {
  animate?: boolean;
}

const AngularSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img src={maraca} className={animate ? styles.icon : ''} width="70px" height="70px" alt="" />

    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   className={animate ? styles.icon : ''}
    //   viewBox="0 0 32 32"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M1 5.3L15.892 0l15.284 5.218-2.47 19.694L15.892 32 3.286 25.004 1 5.3z"
    //     fill="#e23237"
    //   />
    //   <path d="M31.176 5.218L15.892 0v32l12.814-7.088 2.47-19.694z" fill="#b52e31" />
    //   <path
    //     d="M15.915 3.74l-9.28 20.64 3.463-.07 1.87-4.664h8.3l2.032 4.7 3.302.07L15.915 3.74zm.023 6.626l3.14 6.557H13.2l2.747-6.557z"
    //     fill="#fff"
    //   />
    // </svg>
  );
};

export { AngularSvg };