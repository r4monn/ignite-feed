
export function Header() {
  return (
    <header>
        <div className="logo">
          <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0215 2.93302C14.1472 6.9011 15.8158 11.7944 15.7553 16.8155V18.0141L16.7865 18.6416C18.119 19.4482 19.1127 20.6993 19.5866 22.1669C19.1705 21.8605 18.7352 21.5803 18.2833 21.3278L15.5333 19.7838L15.0391 22.9001C14.9963 23.1755 14.9389 23.4485 14.8672 23.718H7.16151C7.04692 23.3655 6.95382 23.0129 6.86789 22.6463L6.24484 19.8261L3.70968 21.2362C3.28615 21.473 2.87723 21.7344 2.48507 22.0188C2.96824 20.5682 3.94123 19.3242 5.24224 18.4935L6.22336 17.866V16.7521C6.24106 11.7513 7.92967 6.89523 11.0287 2.93302H11.0215ZM11.0287 0C10.868 0.000390307 10.7128 0.0579856 10.5918 0.162162L10.5274 0.218566C6.39778 4.76564 4.10466 10.6454 4.08208 16.745C2.32967 17.8643 1.03251 19.5543 0.417263 21.5197C-0.197979 23.485 -0.0921719 25.6007 0.716194 27.4971C1.56776 25.6455 2.99131 24.1058 4.7839 23.0975C4.96368 23.8642 5.2031 24.6161 5.50005 25.3467C5.53771 25.4871 5.62118 25.6114 5.73763 25.7006C5.85408 25.7898 5.99706 25.8388 6.14458 25.8402H16.0847C16.2852 25.8402 16.4857 25.6498 16.586 25.3537C16.8758 24.6592 17.0778 23.9322 17.1875 23.1892C18.9836 24.1932 20.4083 25.7342 21.2553 27.5887C22.1124 25.7017 22.2451 23.5727 21.6287 21.5967C21.0124 19.6206 19.6888 17.9319 17.9037 16.8437C17.9745 10.7082 15.6935 4.77179 11.5157 0.218566C11.4535 0.150085 11.3773 0.0952397 11.2922 0.0575871C11.2071 0.0199344 11.1149 0.000314749 11.0215 0L11.0287 0Z" fill="#4EA8DE"/>
          <path d="M11.0216 16.1598C10.4715 16.1598 9.93376 15.9995 9.47611 15.699C9.01846 15.3986 8.6614 14.9715 8.44993 14.4716C8.23847 13.9716 8.18206 13.4213 8.28782 12.8898C8.39358 12.3584 8.65678 11.8697 9.04423 11.4853C9.43169 11.1009 9.92606 10.838 10.465 10.7298C11.004 10.6216 11.5634 10.6729 12.0728 10.8773C12.5822 11.0816 13.0188 11.4298 13.3275 11.8781C13.6361 12.3263 13.8031 12.8545 13.8074 13.396C13.8159 13.7469 13.7542 14.0961 13.6256 14.4235C13.4971 14.751 13.3043 15.0503 13.0582 15.3043C12.8121 15.5583 12.5176 15.7622 12.1915 15.9041C11.8654 16.0461 11.5141 16.1234 11.1576 16.1316C11.1126 16.1387 11.0666 16.1387 11.0216 16.1316V16.1598Z" fill="#4EA8DE"/>
          <path d="M14.8959 27.5958C14.7167 27.5901 14.5382 27.6198 14.3708 27.683C14.2034 27.7462 14.0505 27.8416 13.9211 27.9638C13.7917 28.086 13.6884 28.2323 13.6172 28.3943C13.546 28.5563 13.5084 28.7307 13.5066 28.9072V33.067C13.5066 33.4297 13.653 33.7776 13.9135 34.0342C14.1741 34.2907 14.5274 34.4348 14.8959 34.4348C15.2644 34.4348 15.6178 34.2907 15.8783 34.0342C16.1389 33.7776 16.2852 33.4297 16.2852 33.067V28.9636C16.291 28.7877 16.2611 28.6126 16.1973 28.4482C16.1336 28.2839 16.0372 28.1337 15.9139 28.0064C15.7906 27.879 15.6428 27.7772 15.4791 27.7067C15.3154 27.6362 15.139 27.5985 14.9604 27.5958H14.8959Z" fill="#5E60CE"/>
          <path d="M7.16154 27.5958C6.97931 27.5863 6.797 27.613 6.62546 27.6743C6.45392 27.7356 6.29665 27.8302 6.16302 27.9526C6.02939 28.0749 5.92213 28.2225 5.84761 28.3865C5.77309 28.5505 5.73284 28.7275 5.72925 28.9072V33.067C5.72925 33.4297 5.87562 33.7777 6.13617 34.0342C6.39672 34.2907 6.7501 34.4348 7.11857 34.4348C7.48704 34.4348 7.84042 34.2907 8.10097 34.0342C8.36152 33.7777 8.50789 33.4297 8.50789 33.067V28.9636C8.51362 28.7877 8.48373 28.6126 8.41998 28.4482C8.35623 28.2839 8.25989 28.1337 8.13658 28.0064C8.01326 27.879 7.86544 27.7772 7.70173 27.7067C7.53802 27.6362 7.36169 27.5985 7.18302 27.5958H7.16154Z" fill="#5E60CE"/>
          <path d="M10.9213 27.5958C10.7426 27.592 10.5649 27.623 10.3984 27.6869C10.2318 27.7507 10.0797 27.8463 9.95068 27.9681C9.82167 28.0899 9.71828 28.2355 9.64644 28.3966C9.5746 28.5577 9.5357 28.7312 9.53198 28.9072V34.6392C9.53198 35.002 9.67836 35.3499 9.93891 35.6064C10.1995 35.8629 10.5528 36.007 10.9213 36.007C11.2898 36.007 11.6432 35.8629 11.9037 35.6064C12.1643 35.3499 12.3106 35.002 12.3106 34.6392V28.9988C12.3164 28.823 12.2865 28.6478 12.2227 28.4835C12.159 28.3191 12.0626 28.1689 11.9393 28.0416C11.816 27.9143 11.6682 27.8124 11.5045 27.7419C11.3408 27.6714 11.1644 27.6337 10.9858 27.631L10.9213 27.5958Z" fill="#5E60CE"/>
          </svg>

          <svg width="91" height="31" viewBox="0 0 91 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8.18182V13.8636H0.625V8.18182H15ZM3.40909 2.95455H11.25V22.983C11.25 23.286 11.3021 23.5417 11.4062 23.75C11.5104 23.9489 11.6714 24.1004 11.8892 24.2045C12.107 24.2992 12.3864 24.3466 12.7273 24.3466C12.964 24.3466 13.2386 24.3182 13.5511 24.2614C13.8731 24.2045 14.1098 24.1572 14.2614 24.1193L15.3977 29.6307C15.0473 29.7348 14.5455 29.8627 13.892 30.0142C13.2481 30.1657 12.4811 30.2652 11.5909 30.3125C9.79167 30.4072 8.28125 30.2225 7.05966 29.7585C5.83807 29.285 4.91951 28.5417 4.30398 27.5284C3.68845 26.5152 3.39015 25.2462 3.40909 23.7216V2.95455ZM28.4766 30.3977C26.1091 30.3977 24.0826 29.929 22.397 28.9915C20.7114 28.0445 19.4188 26.7282 18.5192 25.0426C17.6196 23.3475 17.1697 21.3826 17.1697 19.1477C17.1697 16.9129 17.6196 14.9527 18.5192 13.267C19.4188 11.572 20.7114 10.2557 22.397 9.31818C24.0826 8.37121 26.1091 7.89773 28.4766 7.89773C30.844 7.89773 32.8705 8.37121 34.5561 9.31818C36.2417 10.2557 37.5343 11.572 38.4339 13.267C39.3336 14.9527 39.7834 16.9129 39.7834 19.1477C39.7834 21.3826 39.3336 23.3475 38.4339 25.0426C37.5343 26.7282 36.2417 28.0445 34.5561 28.9915C32.8705 29.929 30.844 30.3977 28.4766 30.3977ZM28.5334 24.6023C29.1963 24.6023 29.7692 24.3797 30.2521 23.9347C30.7351 23.4896 31.1091 22.8551 31.3743 22.0312C31.6394 21.2074 31.772 20.2273 31.772 19.0909C31.772 17.9451 31.6394 16.965 31.3743 16.1506C31.1091 15.3267 30.7351 14.6922 30.2521 14.2472C29.7692 13.8021 29.1963 13.5795 28.5334 13.5795C27.8326 13.5795 27.2313 13.8021 26.7294 14.2472C26.2275 14.6922 25.844 15.3267 25.5788 16.1506C25.3137 16.965 25.1811 17.9451 25.1811 19.0909C25.1811 20.2273 25.3137 21.2074 25.5788 22.0312C25.844 22.8551 26.2275 23.4896 26.7294 23.9347C27.2313 24.3797 27.8326 24.6023 28.5334 24.6023Z" fill="#4EA8DE"/>
          <path d="M50.8629 30.2841C49.3099 30.2841 47.88 29.8769 46.5732 29.0625C45.2758 28.2481 44.2341 27.0123 43.4482 25.3551C42.6716 23.6979 42.2834 21.6098 42.2834 19.0909C42.2834 16.4583 42.6906 14.3182 43.505 12.6705C44.3288 11.0227 45.3894 9.81534 46.6868 9.0483C47.9936 8.28125 49.3667 7.89773 50.8061 7.89773C51.8857 7.89773 52.8326 8.08712 53.647 8.46591C54.4614 8.83523 55.1432 9.33239 55.6925 9.95739C56.2417 10.5729 56.6584 11.25 56.9425 11.9886H57.0561V0.90909H64.897V30H57.1129V26.4205H56.9425C56.6394 27.1591 56.2038 27.822 55.6357 28.4091C55.0769 28.9867 54.3951 29.446 53.5902 29.7869C52.7947 30.1184 51.8857 30.2841 50.8629 30.2841ZM53.7607 24.2614C54.4804 24.2614 55.0959 24.053 55.6072 23.6364C56.1281 23.2102 56.5258 22.6136 56.8004 21.8466C57.0845 21.0701 57.2266 20.1515 57.2266 19.0909C57.2266 18.0114 57.0845 17.0881 56.8004 16.321C56.5258 15.5445 56.1281 14.9527 55.6072 14.5455C55.0959 14.1288 54.4804 13.9205 53.7607 13.9205C53.041 13.9205 52.4254 14.1288 51.9141 14.5455C51.4122 14.9527 51.0239 15.5445 50.7493 16.321C50.4841 17.0881 50.3516 18.0114 50.3516 19.0909C50.3516 20.1705 50.4841 21.0985 50.7493 21.875C51.0239 22.642 51.4122 23.2339 51.9141 23.6506C52.4254 24.0578 53.041 24.2614 53.7607 24.2614ZM79.2578 30.3977C76.8904 30.3977 74.8639 29.929 73.1783 28.9915C71.4927 28.0445 70.2 26.7282 69.3004 25.0426C68.4008 23.3475 67.951 21.3826 67.951 19.1477C67.951 16.9129 68.4008 14.9527 69.3004 13.267C70.2 11.572 71.4927 10.2557 73.1783 9.31818C74.8639 8.37121 76.8904 7.89773 79.2578 7.89773C81.6252 7.89773 83.6518 8.37121 85.3374 9.31818C87.023 10.2557 88.3156 11.572 89.2152 13.267C90.1148 14.9527 90.5646 16.9129 90.5646 19.1477C90.5646 21.3826 90.1148 23.3475 89.2152 25.0426C88.3156 26.7282 87.023 28.0445 85.3374 28.9915C83.6518 29.929 81.6252 30.3977 79.2578 30.3977ZM79.3146 24.6023C79.9775 24.6023 80.5504 24.3797 81.0334 23.9347C81.5163 23.4896 81.8904 22.8551 82.1555 22.0312C82.4207 21.2074 82.5533 20.2273 82.5533 19.0909C82.5533 17.9451 82.4207 16.965 82.1555 16.1506C81.8904 15.3267 81.5163 14.6922 81.0334 14.2472C80.5504 13.8021 79.9775 13.5795 79.3146 13.5795C78.6139 13.5795 78.0125 13.8021 77.5107 14.2472C77.0088 14.6922 76.6252 15.3267 76.3601 16.1506C76.0949 16.965 75.9624 17.9451 75.9624 19.0909C75.9624 20.2273 76.0949 21.2074 76.3601 22.0312C76.6252 22.8551 77.0088 23.4896 77.5107 23.9347C78.0125 24.3797 78.6139 24.6023 79.3146 24.6023Z" fill="#5E60CE"/>
          </svg>
        </div>
      </header>
  )
}