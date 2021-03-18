import React from "react";
import styles from "./Login.css";

const ComponentLogin = () => {
  return (
    <div>
      <form class="signIn-form">
        <h1 class="singin-header">Login</h1>
        <div class="sign-input">
          <input
            class="input-field"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value=""
          />
          <label
            for="email"
            class="input-label"
            data-content="Enter your email address"
          ></label>
        </div>
        <div class="sign-input">
          <input
            type="password"
            class="input-field"
            id="password"
            name="password"
            placeholder="Enter your password"
            value=""
          />
          <label
            for="password"
            class="input-label"
            data-content="Enter your password"
          ></label>
        </div>
        <button class="sign-btn-gray" disabled="">
          Login
        </button>
        <a href="#">Forgot password?</a>
      </form>
      <section class="social-media-signin">
        <p>-OR-</p>
        <button class="btn-facebook">
          <svg
            width="125"
            height="28"
            viewBox="0 0 125 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4966 13.02V15.61H47.0326V17.43H42.4966V21H40.2286V11.2H47.6346V13.02H42.4966ZM55.4139 18.9H50.8639L49.9959 21H47.6719L52.0399 11.2H54.2799L58.6619 21H56.2819L55.4139 18.9ZM54.6999 17.178L53.1459 13.426L51.5919 17.178H54.6999ZM64.4319 21.168C63.4332 21.168 62.5279 20.9533 61.7159 20.524C60.9132 20.0853 60.2785 19.4833 59.8119 18.718C59.3545 17.9433 59.1259 17.0707 59.1259 16.1C59.1259 15.1293 59.3545 14.2613 59.8119 13.496C60.2785 12.7213 60.9132 12.1193 61.7159 11.69C62.5279 11.2513 63.4379 11.032 64.4459 11.032C65.2952 11.032 66.0605 11.1813 66.7419 11.48C67.4325 11.7787 68.0112 12.208 68.4779 12.768L67.0219 14.112C66.3592 13.3467 65.5379 12.964 64.5579 12.964C63.9512 12.964 63.4099 13.0993 62.9339 13.37C62.4579 13.6313 62.0845 14 61.8139 14.476C61.5525 14.952 61.4219 15.4933 61.4219 16.1C61.4219 16.7067 61.5525 17.248 61.8139 17.724C62.0845 18.2 62.4579 18.5733 62.9339 18.844C63.4099 19.1053 63.9512 19.236 64.5579 19.236C65.5379 19.236 66.3592 18.8487 67.0219 18.074L68.4779 19.418C68.0112 19.9873 67.4325 20.4213 66.7419 20.72C66.0512 21.0187 65.2812 21.168 64.4319 21.168ZM77.7975 19.18V21H70.2095V11.2H77.6155V13.02H72.4635V15.148H77.0135V16.912H72.4635V19.18H77.7975ZM86.998 15.904C87.558 16.0813 87.9967 16.38 88.314 16.8C88.6314 17.2107 88.79 17.7193 88.79 18.326C88.79 19.1847 88.454 19.8473 87.782 20.314C87.1194 20.7713 86.1487 21 84.87 21H79.802V11.2H84.59C85.7847 11.2 86.6994 11.4287 87.334 11.886C87.978 12.3433 88.3 12.964 88.3 13.748C88.3 14.224 88.1834 14.6487 87.95 15.022C87.726 15.3953 87.4087 15.6893 86.998 15.904ZM82.056 12.908V15.218H84.31C84.87 15.218 85.2947 15.12 85.584 14.924C85.8734 14.728 86.018 14.4387 86.018 14.056C86.018 13.6733 85.8734 13.3887 85.584 13.202C85.2947 13.006 84.87 12.908 84.31 12.908H82.056ZM84.702 19.292C85.2994 19.292 85.7474 19.194 86.046 18.998C86.354 18.802 86.508 18.4987 86.508 18.088C86.508 17.276 85.906 16.87 84.702 16.87H82.056V19.292H84.702ZM95.4531 21.168C94.4358 21.168 93.5165 20.9487 92.6951 20.51C91.8831 20.0713 91.2438 19.4693 90.7771 18.704C90.3198 17.9293 90.0911 17.0613 90.0911 16.1C90.0911 15.1387 90.3198 14.2753 90.7771 13.51C91.2438 12.7353 91.8831 12.1287 92.6951 11.69C93.5165 11.2513 94.4358 11.032 95.4531 11.032C96.4705 11.032 97.3851 11.2513 98.1971 11.69C99.0091 12.1287 99.6485 12.7353 100.115 13.51C100.582 14.2753 100.815 15.1387 100.815 16.1C100.815 17.0613 100.582 17.9293 100.115 18.704C99.6485 19.4693 99.0091 20.0713 98.1971 20.51C97.3851 20.9487 96.4705 21.168 95.4531 21.168ZM95.4531 19.236C96.0318 19.236 96.5545 19.1053 97.0211 18.844C97.4878 18.5733 97.8518 18.2 98.1131 17.724C98.3838 17.248 98.5191 16.7067 98.5191 16.1C98.5191 15.4933 98.3838 14.952 98.1131 14.476C97.8518 14 97.4878 13.6313 97.0211 13.37C96.5545 13.0993 96.0318 12.964 95.4531 12.964C94.8744 12.964 94.3518 13.0993 93.8851 13.37C93.4184 13.6313 93.0498 14 92.7791 14.476C92.5178 14.952 92.3871 15.4933 92.3871 16.1C92.3871 16.7067 92.5178 17.248 92.7791 17.724C93.0498 18.2 93.4184 18.5733 93.8851 18.844C94.3518 19.1053 94.8744 19.236 95.4531 19.236ZM107.466 21.168C106.448 21.168 105.529 20.9487 104.708 20.51C103.896 20.0713 103.256 19.4693 102.79 18.704C102.332 17.9293 102.104 17.0613 102.104 16.1C102.104 15.1387 102.332 14.2753 102.79 13.51C103.256 12.7353 103.896 12.1287 104.708 11.69C105.529 11.2513 106.448 11.032 107.466 11.032C108.483 11.032 109.398 11.2513 110.21 11.69C111.022 12.1287 111.661 12.7353 112.128 13.51C112.594 14.2753 112.828 15.1387 112.828 16.1C112.828 17.0613 112.594 17.9293 112.128 18.704C111.661 19.4693 111.022 20.0713 110.21 20.51C109.398 20.9487 108.483 21.168 107.466 21.168ZM107.466 19.236C108.044 19.236 108.567 19.1053 109.034 18.844C109.5 18.5733 109.864 18.2 110.126 17.724C110.396 17.248 110.532 16.7067 110.532 16.1C110.532 15.4933 110.396 14.952 110.126 14.476C109.864 14 109.5 13.6313 109.034 13.37C108.567 13.0993 108.044 12.964 107.466 12.964C106.887 12.964 106.364 13.0993 105.898 13.37C105.431 13.6313 105.062 14 104.792 14.476C104.53 14.952 104.4 15.4933 104.4 16.1C104.4 16.7067 104.53 17.248 104.792 17.724C105.062 18.2 105.431 18.5733 105.898 18.844C106.364 19.1053 106.887 19.236 107.466 19.236ZM118.302 17.15L116.986 18.522V21H114.732V11.2H116.986V15.778L121.326 11.2H123.846L119.786 15.568L124.084 21H121.438L118.302 17.15Z"
              fill="#FAF9F7"
            ></path>
            <path
              d="M18.4845 4.64917H20.9494V0.197167C20.5241 0.1365 19.0616 0 17.3584 0C13.8045 0 11.37 2.31817 11.37 6.57883V10.5H7.44824V15.477H11.37V28H16.1782V15.4782H19.9414L20.5387 10.5012H16.1771V7.07233C16.1782 5.63383 16.5517 4.64917 18.4845 4.64917Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <button class="btn-google">
          <svg
            width="116"
            height="29"
            viewBox="0 0 116 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.2498 14.946H61.3218V18.922C60.7898 19.3233 60.1738 19.6313 59.4738 19.846C58.7738 20.0607 58.0692 20.168 57.3598 20.168C56.3425 20.168 55.4278 19.9533 54.6158 19.524C53.8038 19.0853 53.1645 18.4833 52.6978 17.718C52.2405 16.9433 52.0118 16.0707 52.0118 15.1C52.0118 14.1293 52.2405 13.2613 52.6978 12.496C53.1645 11.7213 53.8085 11.1193 54.6298 10.69C55.4512 10.2513 56.3752 10.032 57.4018 10.032C58.2605 10.032 59.0398 10.1767 59.7398 10.466C60.4398 10.7553 61.0278 11.1753 61.5038 11.726L60.0478 13.07C59.3478 12.3327 58.5032 11.964 57.5138 11.964C56.8885 11.964 56.3332 12.0947 55.8478 12.356C55.3625 12.6173 54.9845 12.986 54.7138 13.462C54.4432 13.938 54.3078 14.484 54.3078 15.1C54.3078 15.7067 54.4432 16.248 54.7138 16.724C54.9845 17.2 55.3578 17.5733 55.8338 17.844C56.3192 18.1053 56.8698 18.236 57.4858 18.236C58.1392 18.236 58.7272 18.096 59.2498 17.816V14.946ZM68.3746 20.168C67.3573 20.168 66.4379 19.9487 65.6166 19.51C64.8046 19.0713 64.1653 18.4693 63.6986 17.704C63.2413 16.9293 63.0126 16.0613 63.0126 15.1C63.0126 14.1387 63.2413 13.2753 63.6986 12.51C64.1653 11.7353 64.8046 11.1287 65.6166 10.69C66.4379 10.2513 67.3573 10.032 68.3746 10.032C69.3919 10.032 70.3066 10.2513 71.1186 10.69C71.9306 11.1287 72.5699 11.7353 73.0366 12.51C73.5033 13.2753 73.7366 14.1387 73.7366 15.1C73.7366 16.0613 73.5033 16.9293 73.0366 17.704C72.5699 18.4693 71.9306 19.0713 71.1186 19.51C70.3066 19.9487 69.3919 20.168 68.3746 20.168ZM68.3746 18.236C68.9533 18.236 69.4759 18.1053 69.9426 17.844C70.4093 17.5733 70.7733 17.2 71.0346 16.724C71.3053 16.248 71.4406 15.7067 71.4406 15.1C71.4406 14.4933 71.3053 13.952 71.0346 13.476C70.7733 13 70.4093 12.6313 69.9426 12.37C69.4759 12.0993 68.9533 11.964 68.3746 11.964C67.7959 11.964 67.2733 12.0993 66.8066 12.37C66.3399 12.6313 65.9713 13 65.7006 13.476C65.4393 13.952 65.3086 14.4933 65.3086 15.1C65.3086 15.7067 65.4393 16.248 65.7006 16.724C65.9713 17.2 66.3399 17.5733 66.8066 17.844C67.2733 18.1053 67.7959 18.236 68.3746 18.236ZM80.3871 20.168C79.3698 20.168 78.4504 19.9487 77.6291 19.51C76.8171 19.0713 76.1778 18.4693 75.7111 17.704C75.2538 16.9293 75.0251 16.0613 75.0251 15.1C75.0251 14.1387 75.2538 13.2753 75.7111 12.51C76.1778 11.7353 76.8171 11.1287 77.6291 10.69C78.4504 10.2513 79.3698 10.032 80.3871 10.032C81.4044 10.032 82.3191 10.2513 83.1311 10.69C83.9431 11.1287 84.5824 11.7353 85.0491 12.51C85.5158 13.2753 85.7491 14.1387 85.7491 15.1C85.7491 16.0613 85.5158 16.9293 85.0491 17.704C84.5824 18.4693 83.9431 19.0713 83.1311 19.51C82.3191 19.9487 81.4044 20.168 80.3871 20.168ZM80.3871 18.236C80.9658 18.236 81.4884 18.1053 81.9551 17.844C82.4218 17.5733 82.7858 17.2 83.0471 16.724C83.3178 16.248 83.4531 15.7067 83.4531 15.1C83.4531 14.4933 83.3178 13.952 83.0471 13.476C82.7858 13 82.4218 12.6313 81.9551 12.37C81.4884 12.0993 80.9658 11.964 80.3871 11.964C79.8084 11.964 79.2858 12.0993 78.8191 12.37C78.3524 12.6313 77.9838 13 77.7131 13.476C77.4518 13.952 77.3211 14.4933 77.3211 15.1C77.3211 15.7067 77.4518 16.248 77.7131 16.724C77.9838 17.2 78.3524 17.5733 78.8191 17.844C79.2858 18.1053 79.8084 18.236 80.3871 18.236ZM94.2756 14.946H96.3476V18.922C95.8156 19.3233 95.1996 19.6313 94.4996 19.846C93.7996 20.0607 93.0949 20.168 92.3856 20.168C91.3683 20.168 90.4536 19.9533 89.6416 19.524C88.8296 19.0853 88.1903 18.4833 87.7236 17.718C87.2663 16.9433 87.0376 16.0707 87.0376 15.1C87.0376 14.1293 87.2663 13.2613 87.7236 12.496C88.1903 11.7213 88.8343 11.1193 89.6556 10.69C90.4769 10.2513 91.4009 10.032 92.4276 10.032C93.2863 10.032 94.0656 10.1767 94.7656 10.466C95.4656 10.7553 96.0536 11.1753 96.5296 11.726L95.0736 13.07C94.3736 12.3327 93.5289 11.964 92.5396 11.964C91.9143 11.964 91.3589 12.0947 90.8736 12.356C90.3883 12.6173 90.0103 12.986 89.7396 13.462C89.4689 13.938 89.3336 14.484 89.3336 15.1C89.3336 15.7067 89.4689 16.248 89.7396 16.724C90.0103 17.2 90.3836 17.5733 90.8596 17.844C91.3449 18.1053 91.8956 18.236 92.5116 18.236C93.1649 18.236 93.7529 18.096 94.2756 17.816V14.946ZM98.6544 10.2H100.922V18.152H105.836V20H98.6544V10.2ZM114.892 18.18V20H107.304V10.2H114.71V12.02H109.558V14.148H114.108V15.912H109.558V18.18H114.892Z"
              fill="#FAF9F7"
            ></path>
            <g clip-path="url(#clip0)">
              <path
                d="M6.42701 17.525L5.41756 21.2934L1.72805 21.3715C0.625426 19.3264 0 16.9865 0 14.5C0 12.0955 0.584758 9.82807 1.62128 7.83154H1.62207L4.90678 8.43375L6.34568 11.6987C6.04452 12.5767 5.88037 13.5192 5.88037 14.5C5.88049 15.5643 6.07329 16.5842 6.42701 17.525Z"
                fill="#FBBB00"
              ></path>
              <path
                d="M28.7467 11.7913C28.9132 12.6684 29.0001 13.5742 29.0001 14.5C29.0001 15.5381 28.8909 16.5508 28.683 17.5275C27.9771 20.8514 26.1328 23.7538 23.5778 25.8077L23.577 25.8069L19.4397 25.5958L18.8542 21.9405C20.5495 20.9462 21.8745 19.3902 22.5724 17.5275H14.8188V11.7913H22.6855H28.7467Z"
                fill="#518EF8"
              ></path>
              <path
                d="M23.5768 25.8069L23.5776 25.8076C21.0927 27.805 17.9361 29 14.5 29C8.97803 29 4.17711 25.9136 1.72803 21.3716L6.42699 17.5251C7.6515 20.7932 10.8041 23.1196 14.5 23.1196C16.0886 23.1196 17.5769 22.6901 18.8539 21.9405L23.5768 25.8069Z"
                fill="#28B446"
              ></path>
              <path
                d="M23.7554 3.33817L19.058 7.18384C17.7363 6.35768 16.1739 5.88043 14.5001 5.88043C10.7205 5.88043 7.50896 8.31354 6.34579 11.6988L1.62213 7.83159H1.62134C4.03457 3.17884 8.89603 0 14.5001 0C18.0183 0 21.2441 1.25323 23.7554 3.33817Z"
                fill="#F14336"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="29" height="29" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </section>
    </div>
  );
};

export default ComponentLogin;