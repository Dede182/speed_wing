import styles from './styles.module.scss';
import ten from '../../symbols/ways-of-the-qilin_s_scatter_en.png'

interface SymbolSvgProps {
  animate?: boolean;
}

const ViteSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img src={ten} className={animate ? styles['icon__bolt'] : ''} width="70px" height="70" alt="" />

    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   fill="none"
    //   viewBox="0 0 319 270"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M283.153 50.9377L162.897 265.976C160.414 270.416 154.035 270.442 151.515 266.024L28.8744 50.9584C26.1289 46.1437 30.246 40.3119 35.7019 41.287L156.087 62.8051C156.855 62.9424 157.641 62.9411 158.409 62.8012L276.276 41.3179C281.714 40.3268 285.85 46.1136 283.153 50.9377Z"
    //     fill="url(#paint0_linear_247_5)"
    //   />
    //   <path
    //     d="M213.432 13.0631L124.439 30.5009C122.977 30.7875 121.894 32.0271 121.805 33.5147L116.331 125.971C116.202 128.149 118.202 129.839 120.328 129.349L145.105 123.631C147.423 123.096 149.518 125.138 149.041 127.469L141.68 163.516C141.184 165.942 143.462 168.016 145.831 167.297L161.135 162.647C163.507 161.927 165.787 164.007 165.285 166.435L153.587 223.056C152.855 226.598 157.566 228.529 159.53 225.493L160.843 223.465L233.359 78.7456C234.573 76.3225 232.479 73.5595 229.818 74.0731L204.314 78.9952C201.918 79.4573 199.879 77.2254 200.555 74.8805L217.201 17.1757C217.878 14.8269 215.832 12.593 213.432 13.0631Z"
    //     fill="url(#paint1_linear_247_5)"
    //     className={animate ? styles['icon__bolt'] : ''}
    //   />
    //   <path
    //     d="M241.5 193L243.408 198.873L249.584 198.873L244.588 202.503L246.496 208.377L241.5 204.747L236.504 208.377L238.412 202.503L233.416 198.873L239.592 198.873L241.5 193Z"
    //     fill="#C77B32"
    //     className={animate ? styles['icon__star'] : ''}
    //   />
    //   <path
    //     d="M213 163L215.245 169.91H222.511L216.633 174.18L218.878 181.09L213 176.82L207.122 181.09L209.367 174.18L203.489 169.91H210.755L213 163Z"
    //     fill="#C77B32"
    //     className={animate ? styles['icon__star'] : ''}
    //   />
    //   <path
    //     d="M220 204L221.123 207.455H224.755L221.816 209.59L222.939 213.045L220 210.91L217.061 213.045L218.184 209.59L215.245 207.455H218.877L220 204Z"
    //     fill="#C77B32"
    //     className={animate ? styles['icon__star'] : ''}
    //   />
    //   <path
    //     d="M238 163L239.123 166.455H242.755L239.816 168.59L240.939 172.045L238 169.91L235.061 172.045L236.184 168.59L233.245 166.455H236.877L238 163Z"
    //     fill="#C77B32"
    //     className={animate ? styles['icon__star'] : ''}
    //   />
    //   <path
    //     d="M230 183L231.123 186.455H234.755L231.816 188.59L232.939 192.045L230 189.91L227.061 192.045L228.184 188.59L225.245 186.455H228.877L230 183Z"
    //     fill="#C77B32"
    //     className={animate ? styles['icon__star'] : ''}
    //   />
    //   <g filter="url(#filter0_d_247_5)">
    //     <circle
    //       cx="175"
    //       cy="228"
    //       r="25"
    //       fill="#C77B32"
    //       className={animate ? styles['icon__star'] : ''}
    //     />
    //   </g>
    //   <path
    //     d="M178 204.663L181.424 198.732C181.977 197.776 183.2 197.448 184.156 198L195.781 204.711C196.738 205.264 197.065 206.487 196.513 207.443L193.089 213.375L178 204.663Z"
    //     fill="black"
    //   />
    //   <path
    //     d="M188 205C188 205 193.778 192.25 200 193.525C206.222 194.8 213.778 195.65 213.333 193.525C212.889 191.4 220 188 220 188"
    //     stroke="black"
    //     strokeWidth="2"
    //   />
    //   <g className={animate ? styles['icon__boom'] : ''}>
    //     <path
    //       d="M97.678 56.2075L79.6365 53.0968L87.2172 69.9226L66.5596 57.6281L64.4199 67.4259L54.5577 61.007L45.2283 69.1816L41.7753 57.5996L26.7648 64.9022L30.9344 53.2006L6.76218 62.7452L21.9837 46.0365L3.06617 45.9344L23.1577 36.6389L1.03174 33.8075L17.598 29.5148L9.22816 22.3606L25.3951 21.3975L12.0559 6.55566L34.5665 15.6043L31.905 1.01855L45.0623 12.2297L53.9207 3.33305L60.5026 13.7484L72.482 4.22528L72.9767 16.4108L89.6937 11.701L87.1178 20.8744L108 17.7921L91.3788 29.2889L107.877 33.0834L90.802 38.1694L106.273 45.2349L88.2202 45.8388L97.678 56.2075Z"
    //       fill="#DCDCDC"
    //     />
    //     <path
    //       d="M96.6463 55.189L78.6047 52.0783L86.1854 68.9041L65.5278 56.6096L63.3882 66.4073L53.5259 59.9885L44.1966 68.163L40.7435 56.581L25.733 63.8837L29.9026 52.1821L5.73043 61.7267L20.952 45.0179L2.03443 44.9158L22.126 35.6203L0 32.789L16.5663 28.4962L8.19642 21.3421L24.3634 20.3789L11.0242 5.5371L33.5348 14.5857L30.8733 0L44.0306 11.2111L52.889 2.3145L59.4708 12.7298L71.4503 3.20672L71.945 15.3923L88.662 10.6824L86.0861 19.8559L106.968 16.7736L90.3471 28.2703L106.846 32.0649L89.7703 37.1508L105.241 44.2164L87.1884 44.8203L96.6463 55.189Z"
    //       fill="#FF0000"
    //     />
    //     <path
    //       d="M90.8166 52.1107L75.223 49.4221L81.7751 63.9648L63.9205 53.3386L62.0954 62.7132L53.3437 57.4105L44.8734 64.6678L42.4991 53.3139L29.5254 59.6257L32.5749 49.6921L11.1951 58.0083L25.3931 43.3198L9.04238 43.2315L25.9667 35.3837L7.05762 32.3312L21.6024 29.0399L11.768 22.5838L28.3416 22.024L15.7953 8.81219L35.9707 17.2895L33.3951 4.54541L44.7251 13.8237L51.9796 6.21877L58.6854 15.4128L69.8352 6.91484L69.9622 17.8698L85.9863 13.1848L83.8537 21.815L101.162 18.9078L85.3721 28.8446L99.6319 32.1243L84.8735 36.5201L98.2455 42.627L82.642 43.1489L90.8166 52.1107Z"
    //       fill="#FFA500"
    //     />
    //     <path
    //       d="M86.4697 50.1431L72.8093 47.7877L78.5491 60.5276L62.908 51.2187L61.2559 59.8653L53.6424 54.7858L46.2223 61.1434L44.1423 51.1971L31.6768 56.7454L35.0301 47.8664L16.8473 54.0533L29.1569 42.4419L14.8333 41.9522L29.5758 35.2923L13.3076 32.0318L25.8362 29.9323L17.221 24.2767L31.7399 23.7862L20.7491 12.2123L38.2141 19.6387L35.3318 7.81543L44.9877 15.9777L52.4474 9.94043L58.3219 17.9946L68.0894 10.5502L68.2007 20.147L82.7821 15.806L81.1649 23.7215L95.5325 21.0564L81.7002 29.7613L94.1921 32.6344L81.2634 36.4853L92.9776 41.835L79.3086 42.2923L86.4697 50.1431Z"
    //       fill="#FFFF00"
    //     />
    //     <path
    //       d="M82.6498 48.2061L71.0506 46.2304L75.7028 57.7197L61.9842 49.555L60.3391 57.1839L53.8575 52.6837L47.3494 58.2598L45.5251 49.5361L34.2148 54.2049L36.6733 46.3444L21.033 51.6169L32.3816 41.8571L19.4842 41.067L32.1759 35.2258L18.8154 32.0942L29.469 30.8851L21.9127 25.9246L34.6471 25.4944L25.0071 15.3431L39.9435 21.7665L37.2511 11.0146L45.4504 17.814L52.3318 12.6295L57.9618 20.4147L66.5287 13.8853L66.6263 22.3025L79.893 18.5852L79.0954 25.4827L90.5987 23.1001L78.9441 30.0141L89.4708 32.9396L78.37 36.0468L88.4056 41.0093L76.6554 41.2752L82.6498 48.2061Z"
    //       fill="white"
    //     />
    //     <path
    //       d="M24.858 40V25.4545H30.6818C31.7519 25.4545 32.6444 25.6132 33.3594 25.9304C34.0743 26.2476 34.6117 26.688 34.9716 27.2514C35.3314 27.8101 35.5114 28.4541 35.5114 29.1832C35.5114 29.7514 35.3977 30.2509 35.1705 30.6818C34.9432 31.108 34.6307 31.4583 34.233 31.733C33.84 32.0028 33.3902 32.1946 32.8835 32.3082V32.4503C33.4375 32.474 33.956 32.6302 34.4389 32.919C34.9266 33.2079 35.322 33.6127 35.625 34.1335C35.928 34.6496 36.0795 35.2652 36.0795 35.9801C36.0795 36.7519 35.8878 37.4408 35.5043 38.0469C35.1255 38.6482 34.5644 39.1241 33.821 39.4744C33.0777 39.8248 32.1615 40 31.0724 40H24.858ZM27.9332 37.4858H30.4403C31.2973 37.4858 31.9223 37.3224 32.3153 36.9957C32.7083 36.6643 32.9048 36.224 32.9048 35.6747C32.9048 35.2723 32.8078 34.9171 32.6136 34.6094C32.4195 34.3016 32.1425 34.0601 31.7827 33.8849C31.4276 33.7098 31.0038 33.6222 30.5114 33.6222H27.9332V37.4858ZM27.9332 31.5412H30.2131C30.6345 31.5412 31.0085 31.4678 31.3352 31.321C31.6667 31.1695 31.9271 30.9564 32.1165 30.6818C32.3106 30.4072 32.4077 30.0781 32.4077 29.6946C32.4077 29.169 32.2206 28.7453 31.8466 28.4233C31.4773 28.1013 30.9517 27.9403 30.2699 27.9403H27.9332V31.5412ZM51.4471 32.7273C51.4471 34.3134 51.1464 35.6629 50.5451 36.7756C49.9485 37.8883 49.1341 38.7382 48.1019 39.3253C47.0745 39.9077 45.9192 40.1989 44.636 40.1989C43.3434 40.1989 42.1834 39.9053 41.1559 39.3182C40.1284 38.7311 39.3164 37.8812 38.7198 36.7685C38.1232 35.6558 37.8249 34.3087 37.8249 32.7273C37.8249 31.1411 38.1232 29.7917 38.7198 28.679C39.3164 27.5663 40.1284 26.7187 41.1559 26.1364C42.1834 25.5492 43.3434 25.2557 44.636 25.2557C45.9192 25.2557 47.0745 25.5492 48.1019 26.1364C49.1341 26.7187 49.9485 27.5663 50.5451 28.679C51.1464 29.7917 51.4471 31.1411 51.4471 32.7273ZM48.3292 32.7273C48.3292 31.6998 48.1753 30.8333 47.8675 30.1278C47.5645 29.4223 47.136 28.8873 46.582 28.5227C46.0281 28.1581 45.3794 27.9759 44.636 27.9759C43.8926 27.9759 43.244 28.1581 42.69 28.5227C42.136 28.8873 41.7051 29.4223 41.3974 30.1278C41.0943 30.8333 40.9428 31.6998 40.9428 32.7273C40.9428 33.7547 41.0943 34.6212 41.3974 35.3267C41.7051 36.0322 42.136 36.5672 42.69 36.9318C43.244 37.2964 43.8926 37.4787 44.636 37.4787C45.3794 37.4787 46.0281 37.2964 46.582 36.9318C47.136 36.5672 47.5645 36.0322 47.8675 35.3267C48.1753 34.6212 48.3292 33.7547 48.3292 32.7273ZM67.0916 32.7273C67.0916 34.3134 66.791 35.6629 66.1896 36.7756C65.593 37.8883 64.7786 38.7382 63.7464 39.3253C62.719 39.9077 61.5637 40.1989 60.2805 40.1989C58.9879 40.1989 57.8279 39.9053 56.8004 39.3182C55.773 38.7311 54.9609 37.8812 54.3643 36.7685C53.7678 35.6558 53.4695 34.3087 53.4695 32.7273C53.4695 31.1411 53.7678 29.7917 54.3643 28.679C54.9609 27.5663 55.773 26.7187 56.8004 26.1364C57.8279 25.5492 58.9879 25.2557 60.2805 25.2557C61.5637 25.2557 62.719 25.5492 63.7464 26.1364C64.7786 26.7187 65.593 27.5663 66.1896 28.679C66.791 29.7917 67.0916 31.1411 67.0916 32.7273ZM63.9737 32.7273C63.9737 31.6998 63.8198 30.8333 63.5121 30.1278C63.209 29.4223 62.7805 28.8873 62.2266 28.5227C61.6726 28.1581 61.0239 27.9759 60.2805 27.9759C59.5372 27.9759 58.8885 28.1581 58.3345 28.5227C57.7805 28.8873 57.3497 29.4223 57.0419 30.1278C56.7389 30.8333 56.5874 31.6998 56.5874 32.7273C56.5874 33.7547 56.7389 34.6212 57.0419 35.3267C57.3497 36.0322 57.7805 36.5672 58.3345 36.9318C58.8885 37.2964 59.5372 37.4787 60.2805 37.4787C61.0239 37.4787 61.6726 37.2964 62.2266 36.9318C62.7805 36.5672 63.209 36.0322 63.5121 35.3267C63.8198 34.6212 63.9737 33.7547 63.9737 32.7273ZM69.3697 25.4545H73.1623L77.168 35.2273H77.3384L81.3441 25.4545H85.1367V40H82.1538V30.5327H82.033L78.2688 39.929H76.2376L72.4734 30.4972H72.3526V40H69.3697V25.4545Z"
    //       fill="#C77B32"
    //       className={animate ? styles['icon__star'] : ''}
    //     />
    //   </g>
    //   <path
    //     d="M31.0273 248V208H58.918V215.852H40.6953V224.055H57.4922V231.926H40.6953V240.148H58.918V248H31.0273ZM73.0977 218L78.0391 227.883L83.1562 218H92.7852L84.4063 233L93.0977 248H83.5469L78.0391 238.039L72.668 248H62.9805L71.6914 233L63.4102 218H73.0977ZM97.1455 259.25V218H106.599V223.137H106.892C107.282 222.225 107.836 221.346 108.552 220.5C109.281 219.654 110.205 218.964 111.325 218.43C112.458 217.883 113.812 217.609 115.388 217.609C117.471 217.609 119.418 218.156 121.228 219.25C123.05 220.344 124.522 222.03 125.642 224.309C126.761 226.587 127.321 229.491 127.321 233.02C127.321 236.418 126.781 239.263 125.7 241.555C124.632 243.846 123.187 245.565 121.364 246.711C119.554 247.857 117.543 248.43 115.329 248.43C113.819 248.43 112.51 248.182 111.403 247.687C110.297 247.193 109.366 246.542 108.61 245.734C107.868 244.927 107.295 244.061 106.892 243.137H106.696V259.25H97.1455ZM106.501 233C106.501 234.615 106.716 236.021 107.146 237.219C107.588 238.417 108.22 239.348 109.04 240.012C109.873 240.663 110.869 240.988 112.028 240.988C113.2 240.988 114.196 240.663 115.017 240.012C115.837 239.348 116.455 238.417 116.872 237.219C117.302 236.021 117.517 234.615 117.517 233C117.517 231.385 117.302 229.986 116.872 228.801C116.455 227.616 115.837 226.698 115.017 226.047C114.209 225.396 113.213 225.07 112.028 225.07C110.856 225.07 109.86 225.389 109.04 226.027C108.22 226.665 107.588 227.577 107.146 228.762C106.716 229.947 106.501 231.359 106.501 233ZM141.877 208V248H132.326V208H141.877ZM233.229 227.16L224.46 227.395C224.369 226.77 224.121 226.216 223.718 225.734C223.314 225.24 222.787 224.855 222.136 224.582C221.498 224.296 220.756 224.152 219.909 224.152C218.802 224.152 217.858 224.374 217.077 224.816C216.309 225.259 215.931 225.858 215.944 226.613C215.931 227.199 216.166 227.707 216.647 228.137C217.142 228.566 218.021 228.911 219.284 229.172L225.065 230.266C228.06 230.839 230.287 231.789 231.745 233.117C233.216 234.445 233.959 236.203 233.972 238.391C233.959 240.448 233.347 242.238 232.136 243.762C230.938 245.285 229.297 246.47 227.214 247.316C225.131 248.15 222.748 248.566 220.065 248.566C215.782 248.566 212.403 247.687 209.929 245.93C207.468 244.159 206.062 241.789 205.71 238.82L215.144 238.586C215.352 239.68 215.892 240.513 216.765 241.086C217.637 241.659 218.75 241.945 220.104 241.945C221.328 241.945 222.325 241.717 223.093 241.262C223.861 240.806 224.252 240.201 224.265 239.445C224.252 238.768 223.952 238.228 223.366 237.824C222.78 237.408 221.862 237.082 220.612 236.848L215.378 235.852C212.37 235.305 210.131 234.296 208.659 232.824C207.188 231.34 206.459 229.452 206.472 227.16C206.459 225.155 206.993 223.443 208.073 222.023C209.154 220.591 210.69 219.497 212.683 218.742C214.675 217.987 217.025 217.609 219.733 217.609C223.796 217.609 226.999 218.462 229.343 220.168C231.687 221.861 232.982 224.191 233.229 227.16ZM238.674 248V218H248.225V248H238.674ZM243.459 214.504C242.118 214.504 240.965 214.061 240.002 213.176C239.038 212.277 238.557 211.197 238.557 209.934C238.557 208.684 239.038 207.616 240.002 206.73C240.965 205.832 242.118 205.383 243.459 205.383C244.813 205.383 245.965 205.832 246.916 206.73C247.88 207.616 248.361 208.684 248.361 209.934C248.361 211.197 247.88 212.277 246.916 213.176C245.965 214.061 244.813 214.504 243.459 214.504ZM283.405 218L273.112 248H262.175L251.901 218H261.96L267.487 238.664H267.8L273.347 218H283.405ZM300.124 248.566C296.986 248.566 294.278 247.948 291.999 246.711C289.733 245.461 287.989 243.684 286.765 241.379C285.554 239.061 284.948 236.307 284.948 233.117C284.948 230.018 285.56 227.31 286.784 224.992C288.008 222.661 289.733 220.852 291.96 219.562C294.187 218.26 296.81 217.609 299.831 217.609C301.966 217.609 303.92 217.941 305.69 218.605C307.461 219.27 308.991 220.253 310.28 221.555C311.569 222.857 312.572 224.465 313.288 226.379C314.004 228.28 314.362 230.461 314.362 232.922V235.305H288.288V229.758H305.476C305.463 228.742 305.222 227.837 304.753 227.043C304.284 226.249 303.64 225.63 302.819 225.187C302.012 224.732 301.081 224.504 300.026 224.504C298.959 224.504 298.002 224.745 297.155 225.227C296.309 225.695 295.638 226.34 295.144 227.16C294.649 227.967 294.388 228.885 294.362 229.914V235.559C294.362 236.783 294.603 237.857 295.085 238.781C295.567 239.693 296.25 240.402 297.136 240.91C298.021 241.418 299.076 241.672 300.3 241.672C301.146 241.672 301.914 241.555 302.604 241.32C303.295 241.086 303.887 240.741 304.382 240.285C304.877 239.829 305.248 239.27 305.495 238.605L314.265 238.859C313.9 240.826 313.099 242.538 311.862 243.996C310.638 245.441 309.03 246.568 307.038 247.375C305.046 248.169 302.741 248.566 300.124 248.566Z"
    //     fill="#C77B32"
    //   />
    //   <defs>
    //     <filter
    //       id="filter0_d_247_5"
    //       x="146"
    //       y="203"
    //       width="58"
    //       height="58"
    //       filterUnits="userSpaceOnUse"
    //       colorInterpolationFilters="sRGB"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dy="4" />
    //       <feGaussianBlur stdDeviation="2" />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
    //       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_5" />
    //       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_247_5" result="shape" />
    //     </filter>
    //     <linearGradient
    //       id="paint0_linear_247_5"
    //       x1="25.8801"
    //       y1="58.6364"
    //       x2="155.576"
    //       y2="234.774"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#41D1FF" />
    //       <stop offset="0.5" stopColor="#7F83FF" />
    //       <stop offset="0.604167" stopColor="#8C72FE" />
    //       <stop offset="1" stopColor="#BD34FE" />
    //     </linearGradient>
    //     <linearGradient
    //       id="paint1_linear_247_5"
    //       x1="167.243"
    //       y1="17.7974"
    //       x2="193.924"
    //       y2="200.822"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#FFA800" />
    //       <stop offset="0.0833333" stopColor="#FFDD35" />
    //       <stop offset="1" stopColor="#FFA800" />
    //     </linearGradient>
    //   </defs>
    // </svg>
  );
};

export { ViteSvg };
