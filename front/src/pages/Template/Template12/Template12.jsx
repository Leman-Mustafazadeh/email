import React from "react";
import temp1 from "../../../assets/images/templateBanner/temp1.png";
import "./_style.scss";
import { Input, QRCode, Space } from "antd";
const Template12 = () => {
  const [text, setText] = React.useState("https://ant.design/");

  return (
    <section className="template_dam12">
      <div className="container template_wrap">
        <div className="row  flex-justify-space-between  template_hero">
          <div className="row flex-align-center  template_hero">
            <div>
              <h1 className="font-size-20 font-weight-700 text-text">
                SANDRA HARRİS
              </h1>
              <h5 className="font-size-16 font-weight-400 text-primary pt-2">
                Fitness Influencer
              </h5>

              <div className="social_temp12 mb-6">
             <a href=""> <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#1A73E8" />
                <rect
                  width="24"
                  height="24"
                  rx="4"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M10.0743 20.4486H13.5371V13.5142H16.6572L17 10.0687H13.5371V8.32859C13.5371 8.09899 13.6283 7.87879 13.7907 7.71643C13.953 7.55408 14.1732 7.46287 14.4028 7.46287H17V4H14.4028C13.2548 4 12.1538 4.45605 11.3421 5.26781C10.5303 6.07958 10.0743 7.18058 10.0743 8.32859V10.0687H8.34282L8 13.5142H10.0743V20.4486Z"
                  fill="white"
                />
              </svg></a>

            <a href="">  <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#1A73E8" />
                <rect
                  width="24"
                  height="24"
                  rx="4"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M12.1882 4.1875C10.0156 4.1875 9.74286 4.19702 8.88958 4.23582C8.0379 4.27486 7.45654 4.40966 6.9479 4.6075C6.42166 4.81182 5.97534 5.08518 5.5307 5.52998C5.08566 5.9747 4.8123 6.42102 4.60734 6.94702C4.40894 7.45582 4.27398 8.03742 4.23566 8.8887C4.1975 9.74206 4.1875 10.0149 4.1875 12.1876C4.1875 14.3603 4.1971 14.6321 4.23582 15.4854C4.27502 16.3371 4.40982 16.9185 4.6075 17.4271C4.81198 17.9533 5.08534 18.3997 5.53014 18.8443C5.9747 19.2893 6.42102 19.5633 6.94686 19.7677C7.4559 19.9655 8.03734 20.1003 8.88886 20.1393C9.74222 20.1781 10.0147 20.1877 12.1873 20.1877C14.3601 20.1877 14.632 20.1781 15.4853 20.1393C16.3369 20.1003 16.9189 19.9655 17.428 19.7677C17.954 19.5633 18.3997 19.2893 18.8441 18.8443C19.2892 18.3997 19.5625 17.9533 19.7675 17.4273C19.9641 16.9185 20.0992 16.3369 20.1392 15.4856C20.1775 14.6323 20.1875 14.3603 20.1875 12.1876C20.1875 10.0149 20.1775 9.74222 20.1392 8.88886C20.0992 8.03718 19.9641 7.4559 19.7675 6.94726C19.5625 6.42102 19.2892 5.9747 18.8441 5.52998C18.3992 5.08502 17.9541 4.81166 17.4275 4.60758C16.9175 4.40966 16.3358 4.27478 15.4841 4.23582C14.6308 4.19702 14.3591 4.1875 12.1857 4.1875H12.1882ZM11.4705 5.62918C11.6836 5.62886 11.9213 5.62918 12.1882 5.62918C14.3243 5.62918 14.5774 5.63686 15.4209 5.67518C16.2009 5.71086 16.6243 5.84118 16.9063 5.9507C17.2797 6.09566 17.5458 6.26902 17.8257 6.5491C18.1057 6.8291 18.2789 7.09574 18.4243 7.4691C18.5338 7.7507 18.6643 8.17406 18.6998 8.95406C18.7381 9.79742 18.7465 10.0507 18.7465 12.1857C18.7465 14.3208 18.7381 14.5741 18.6998 15.4174C18.6641 16.1974 18.5338 16.6208 18.4243 16.9025C18.2793 17.2758 18.1057 17.5417 17.8257 17.8215C17.5457 18.1015 17.2798 18.2748 16.9063 18.4198C16.6246 18.5298 16.2009 18.6598 15.4209 18.6955C14.5776 18.7338 14.3243 18.7421 12.1882 18.7421C10.0521 18.7421 9.79886 18.7338 8.95558 18.6955C8.17558 18.6595 7.75222 18.5292 7.46998 18.4197C7.0967 18.2746 6.82998 18.1013 6.54998 17.8213C6.26998 17.5413 6.0967 17.2753 5.95134 16.9018C5.84182 16.6201 5.71134 16.1968 5.67582 15.4168C5.6375 14.5734 5.62982 14.3201 5.62982 12.1837C5.62982 10.0473 5.6375 9.79542 5.67582 8.95206C5.7115 8.17206 5.84182 7.7487 5.95134 7.4667C6.09638 7.09334 6.26998 6.8267 6.55006 6.5467C6.83014 6.2667 7.0967 6.09334 7.47006 5.94806C7.75206 5.83806 8.17558 5.70806 8.95558 5.67222C9.69358 5.63886 9.97958 5.62886 11.4705 5.62718V5.62918ZM16.4586 6.9575C15.9286 6.9575 15.4986 7.3871 15.4986 7.91718C15.4986 8.44718 15.9286 8.87718 16.4586 8.87718C16.9886 8.87718 17.4186 8.44718 17.4186 7.91718C17.4186 7.38718 16.9886 6.95718 16.4586 6.95718V6.9575ZM12.1882 8.07918C9.91942 8.07918 8.0799 9.9187 8.0799 12.1876C8.0799 14.4565 9.91942 16.2951 12.1882 16.2951C14.4571 16.2951 16.296 14.4565 16.296 12.1876C16.296 9.91878 14.4569 8.07918 12.1881 8.07918H12.1882ZM12.1882 9.52086C13.6609 9.52086 14.8549 10.7147 14.8549 12.1876C14.8549 13.6603 13.6609 14.8543 12.1882 14.8543C10.7155 14.8543 9.52158 13.6603 9.52158 12.1876C9.52158 10.7147 10.7154 9.52086 12.1882 9.52086Z"
                  fill="white"
                />
              </svg></a>

             <a href=""> <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#1A73E8" />
                <rect
                  width="24"
                  height="24"
                  rx="4"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M7.55556 5.77778C7.55556 6.72178 6.92444 7.53422 5.77689 7.53422C4.69689 7.53422 4 6.768 4 5.824C4 4.85511 4.67556 4 5.77778 4C6.88 4 7.53422 4.80889 7.55556 5.77778ZM4 20V8.44444H7.55556V20H4ZM9.33333 12.3947C9.33333 11.0213 9.288 9.87378 9.24267 8.88267H12.4373L12.5956 10.4142H12.6631C13.1129 9.69333 14.2151 8.63644 16.0604 8.63644C18.3111 8.63644 20 10.1431 20 13.3849V20H16.4444V13.9013C16.4444 12.4844 15.9049 11.4036 14.6667 11.4036C13.7227 11.4036 13.2498 12.168 13.0018 12.7982C12.9111 13.024 12.8889 13.3387 12.8889 13.6542V20H9.33333V12.3947Z"
                  fill="white"
                />
              </svg></a>
            </div>
             
            </div>
          </div>

          <div className="row temp12">
          
            <Space direction="vertical" align="center">
              <QRCode value={text || "-"} />
            </Space>

            <div className="temp5_hero">
            <div className="row flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.8001 4.09961H7.7624H7.76237C6.95433 4.0996 6.29349 4.09959 5.75642 4.14347C5.2005 4.18889 4.69842 4.28577 4.22954 4.52469C3.4957 4.89859 2.89908 5.49522 2.52517 6.22905C2.28626 6.69794 2.18938 7.20001 2.14396 7.75593C2.10008 8.293 2.10009 8.95385 2.1001 9.76189V9.76191V9.79961V14.1996V14.2373V14.2373C2.10009 15.0454 2.10008 15.7062 2.14396 16.2433C2.18938 16.7992 2.28626 17.3013 2.52517 17.7702C2.89908 18.504 3.4957 19.1006 4.22954 19.4745C4.69842 19.7134 5.2005 19.8103 5.75642 19.8557C6.29349 19.8996 6.95434 19.8996 7.76239 19.8996H7.8001H16.2001H16.2378C17.0459 19.8996 17.7067 19.8996 18.2438 19.8557C18.7997 19.8103 19.3018 19.7134 19.7707 19.4745C20.5045 19.1006 21.1011 18.504 21.475 17.7702C21.7139 17.3013 21.8108 16.7992 21.8562 16.2433C21.9001 15.7062 21.9001 15.0454 21.9001 14.2373V14.1996V9.79961V9.76191C21.9001 8.95385 21.9001 8.293 21.8562 7.75593C21.8108 7.20001 21.7139 6.69794 21.475 6.22905C21.1011 5.49522 20.5045 4.89859 19.7707 4.52469C19.3018 4.28577 18.7997 4.18889 18.2438 4.14347C17.7067 4.09959 17.0459 4.0996 16.2378 4.09961H16.2378H16.2001H7.8001ZM5.38073 6.01178C5.5163 5.98042 5.68489 5.95531 5.90299 5.93749C6.3581 5.90031 6.94517 5.89961 7.8001 5.89961H16.2001C17.055 5.89961 17.6421 5.90031 18.0972 5.93749C18.3153 5.95531 18.4839 5.98042 18.6195 6.01178L14.6104 9.5197C14.0326 10.0253 13.637 10.3706 13.3075 10.617C12.9871 10.8566 12.7833 10.9602 12.607 11.0123C12.2109 11.1294 11.7893 11.1294 11.3932 11.0123C11.2169 10.9602 11.0131 10.8566 10.6926 10.617C10.3632 10.3706 9.9676 10.0253 9.38979 9.5197L5.38073 6.01178ZM4.0505 7.2396C4.00096 7.39529 3.96255 7.60184 3.93798 7.90251C3.9008 8.35761 3.9001 8.94468 3.9001 9.79961V14.1996C3.9001 15.0545 3.9008 15.6416 3.93798 16.0967C3.97431 16.5413 4.04092 16.7801 4.12898 16.953C4.33032 17.3481 4.65158 17.6694 5.04672 17.8707C5.21956 17.9588 5.45839 18.0254 5.90299 18.0617C6.3581 18.0989 6.94517 18.0996 7.8001 18.0996H16.2001C17.055 18.0996 17.6421 18.0989 18.0972 18.0617C18.5418 18.0254 18.7806 17.9588 18.9535 17.8707C19.3486 17.6694 19.6699 17.3481 19.8712 16.953C19.9593 16.7801 20.0259 16.5413 20.0622 16.0967C20.0994 15.6416 20.1001 15.0545 20.1001 14.1996V9.79961C20.1001 8.94468 20.0994 8.35761 20.0622 7.9025C20.0377 7.60184 19.9992 7.39529 19.9497 7.2396L15.7957 10.8743L15.7695 10.8973C15.2244 11.3743 14.7769 11.7658 14.3855 12.0585C13.9789 12.3626 13.5797 12.6017 13.1174 12.7384C12.3882 12.9541 11.612 12.9541 10.8828 12.7384C10.4205 12.6017 10.0213 12.3626 9.61468 12.0585C9.22329 11.7658 8.77586 11.3743 8.23074 10.8973L8.20448 10.8743L4.0505 7.2396Z"
                  fill="#1A73E8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.8001 4.09961H7.7624H7.76237C6.95433 4.0996 6.29349 4.09959 5.75642 4.14347C5.2005 4.18889 4.69842 4.28577 4.22954 4.52469C3.4957 4.89859 2.89908 5.49522 2.52517 6.22905C2.28626 6.69794 2.18938 7.20001 2.14396 7.75593C2.10008 8.293 2.10009 8.95385 2.1001 9.76189V9.76191V9.79961V14.1996V14.2373V14.2373C2.10009 15.0454 2.10008 15.7062 2.14396 16.2433C2.18938 16.7992 2.28626 17.3013 2.52517 17.7702C2.89908 18.504 3.4957 19.1006 4.22954 19.4745C4.69842 19.7134 5.2005 19.8103 5.75642 19.8557C6.29349 19.8996 6.95434 19.8996 7.76239 19.8996H7.8001H16.2001H16.2378C17.0459 19.8996 17.7067 19.8996 18.2438 19.8557C18.7997 19.8103 19.3018 19.7134 19.7707 19.4745C20.5045 19.1006 21.1011 18.504 21.475 17.7702C21.7139 17.3013 21.8108 16.7992 21.8562 16.2433C21.9001 15.7062 21.9001 15.0454 21.9001 14.2373V14.1996V9.79961V9.76191C21.9001 8.95385 21.9001 8.293 21.8562 7.75593C21.8108 7.20001 21.7139 6.69794 21.475 6.22905C21.1011 5.49522 20.5045 4.89859 19.7707 4.52469C19.3018 4.28577 18.7997 4.18889 18.2438 4.14347C17.7067 4.09959 17.0459 4.0996 16.2378 4.09961H16.2378H16.2001H7.8001ZM5.38073 6.01178C5.5163 5.98042 5.68489 5.95531 5.90299 5.93749C6.3581 5.90031 6.94517 5.89961 7.8001 5.89961H16.2001C17.055 5.89961 17.6421 5.90031 18.0972 5.93749C18.3153 5.95531 18.4839 5.98042 18.6195 6.01178L14.6104 9.5197C14.0326 10.0253 13.637 10.3706 13.3075 10.617C12.9871 10.8566 12.7833 10.9602 12.607 11.0123C12.2109 11.1294 11.7893 11.1294 11.3932 11.0123C11.2169 10.9602 11.0131 10.8566 10.6926 10.617C10.3632 10.3706 9.9676 10.0253 9.38979 9.5197L5.38073 6.01178ZM4.0505 7.2396C4.00096 7.39529 3.96255 7.60184 3.93798 7.90251C3.9008 8.35761 3.9001 8.94468 3.9001 9.79961V14.1996C3.9001 15.0545 3.9008 15.6416 3.93798 16.0967C3.97431 16.5413 4.04092 16.7801 4.12898 16.953C4.33032 17.3481 4.65158 17.6694 5.04672 17.8707C5.21956 17.9588 5.45839 18.0254 5.90299 18.0617C6.3581 18.0989 6.94517 18.0996 7.8001 18.0996H16.2001C17.055 18.0996 17.6421 18.0989 18.0972 18.0617C18.5418 18.0254 18.7806 17.9588 18.9535 17.8707C19.3486 17.6694 19.6699 17.3481 19.8712 16.953C19.9593 16.7801 20.0259 16.5413 20.0622 16.0967C20.0994 15.6416 20.1001 15.0545 20.1001 14.1996V9.79961C20.1001 8.94468 20.0994 8.35761 20.0622 7.9025C20.0377 7.60184 19.9992 7.39529 19.9497 7.2396L15.7957 10.8743L15.7695 10.8973C15.2244 11.3743 14.7769 11.7658 14.3855 12.0585C13.9789 12.3626 13.5797 12.6017 13.1174 12.7384C12.3882 12.9541 11.612 12.9541 10.8828 12.7384C10.4205 12.6017 10.0213 12.3626 9.61468 12.0585C9.22329 11.7658 8.77586 11.3743 8.23074 10.8973L8.20448 10.8743L4.0505 7.2396Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>

              <a href="" className="font-size-16 font-weight-500 text-text pl-1 nunito">sandraharris050@gmail.com</a>
            </div>

            <div className="row flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9998 13C13.9328 13 15.4998 11.433 15.4998 9.5C15.4998 7.567 13.9328 6 11.9998 6C10.0668 6 8.49982 7.567 8.49982 9.5C8.49982 11.433 10.0668 13 11.9998 13ZM11.9998 11.2C12.9387 11.2 13.6998 10.4389 13.6998 9.49999C13.6998 8.5611 12.9387 7.79999 11.9998 7.79999C11.0609 7.79999 10.2998 8.5611 10.2998 9.49999C10.2998 10.4389 11.0609 11.2 11.9998 11.2Z"
                  fill="#1A73E8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9998 13C13.9328 13 15.4998 11.433 15.4998 9.5C15.4998 7.567 13.9328 6 11.9998 6C10.0668 6 8.49982 7.567 8.49982 9.5C8.49982 11.433 10.0668 13 11.9998 13ZM11.9998 11.2C12.9387 11.2 13.6998 10.4389 13.6998 9.49999C13.6998 8.5611 12.9387 7.79999 11.9998 7.79999C11.0609 7.79999 10.2998 8.5611 10.2998 9.49999C10.2998 10.4389 11.0609 11.2 11.9998 11.2Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.24268 9.76987C4.24268 5.48026 7.71409 2 11.9998 2C16.2855 2 19.757 5.48026 19.757 9.76987C19.757 12.903 17.7829 16.6225 14.1922 20.8679C14.0891 20.9898 13.976 21.1029 13.8541 21.206C12.6433 22.2301 10.8315 22.0787 9.8074 20.8679L9.24032 20.1974L9.24608 20.1923C6.01154 16.2269 4.24268 12.7357 4.24268 9.76987ZM11.1848 19.7091C11.5675 20.1576 12.2411 20.2128 12.6917 19.8317C12.7372 19.7932 12.7794 19.751 12.8179 19.7055C16.3631 15.5139 17.957 12.2221 17.957 9.76987C17.957 6.47123 15.2883 3.8 11.9998 3.8C8.71135 3.8 6.04268 6.47123 6.04268 9.76987C6.04268 12.2221 7.63655 15.5139 11.1817 19.7055L11.1848 19.7091Z"
                  fill="#1A73E8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.24268 9.76987C4.24268 5.48026 7.71409 2 11.9998 2C16.2855 2 19.757 5.48026 19.757 9.76987C19.757 12.903 17.7829 16.6225 14.1922 20.8679C14.0891 20.9898 13.976 21.1029 13.8541 21.206C12.6433 22.2301 10.8315 22.0787 9.8074 20.8679L9.24032 20.1974L9.24608 20.1923C6.01154 16.2269 4.24268 12.7357 4.24268 9.76987ZM11.1848 19.7091C11.5675 20.1576 12.2411 20.2128 12.6917 19.8317C12.7372 19.7932 12.7794 19.751 12.8179 19.7055C16.3631 15.5139 17.957 12.2221 17.957 9.76987C17.957 6.47123 15.2883 3.8 11.9998 3.8C8.71135 3.8 6.04268 6.47123 6.04268 9.76987C6.04268 12.2221 7.63655 15.5139 11.1817 19.7055L11.1848 19.7091Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
              <a href="" className="font-size-16 font-weight-500 text-text pl-1 nunito ">  Baku,Fuzzy</a>
            
            </div>

            <div className="row flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49506 4.12319C1.57458 7.33638 3.13449 12.3086 7.42326 16.6172C11.6208 20.834 16.8171 22.4106 19.8922 19.5495C21.5745 17.9841 21.3259 15.2121 19.2476 13.3596L19.0578 13.1983C17.1296 11.637 14.331 11.632 12.6216 13.1712L12.534 13.2534L12.4843 13.2116C12.2975 13.0524 12.0544 12.8307 11.7609 12.5389L11.4638 12.2369L11.1575 11.9107C11.0656 11.8101 10.9839 11.7178 10.9119 11.634L10.7883 11.4877L10.7188 11.5629C12.406 9.86789 12.422 6.84909 10.7246 4.82112C8.83975 2.56903 5.9807 2.48865 4.49506 4.12319ZM9.34619 5.97499C10.5252 7.38369 10.3934 9.34164 9.44486 10.2946L9.29694 10.4341C8.6676 11.0002 8.05323 11.334 10.3282 13.6475C12.7828 16.1437 13.0889 15.268 13.7283 14.5986C14.7327 13.5896 16.6995 13.4965 18.0515 14.7016C19.5467 16.0344 19.3847 17.5661 18.6677 18.2333C16.449 20.2977 12.2001 18.8678 8.69723 15.3489C5.1944 11.8299 3.63985 7.73682 5.82526 5.33238C6.33259 4.77419 7.92364 4.27531 9.34619 5.97499Z"
                  fill="#1A73E8"
                />
                <path
                  d="M4.49506 4.12319C1.57458 7.33638 3.13449 12.3086 7.42326 16.6172C11.6208 20.834 16.8171 22.4106 19.8922 19.5495C21.5745 17.9841 21.3259 15.2121 19.2476 13.3596L19.0578 13.1983C17.1296 11.637 14.331 11.632 12.6216 13.1712L12.534 13.2534L12.4843 13.2116C12.2975 13.0524 12.0544 12.8307 11.7609 12.5389L11.4638 12.2369L11.1575 11.9107C11.0656 11.8101 10.9839 11.7178 10.9119 11.634L10.7883 11.4877L10.7188 11.5629C12.406 9.86789 12.422 6.84909 10.7246 4.82112C8.83975 2.56903 5.9807 2.48865 4.49506 4.12319ZM9.34619 5.97499C10.5252 7.38369 10.3934 9.34164 9.44486 10.2946L9.29694 10.4341C8.6676 11.0002 8.05323 11.334 10.3282 13.6475C12.7828 16.1437 13.0889 15.268 13.7283 14.5986C14.7327 13.5896 16.6995 13.4965 18.0515 14.7016C19.5467 16.0344 19.3847 17.5661 18.6677 18.2333C16.449 20.2977 12.2001 18.8678 8.69723 15.3489C5.1944 11.8299 3.63985 7.73682 5.82526 5.33238C6.33259 4.77419 7.92364 4.27531 9.34619 5.97499Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
              <a href="" className="font-size-16 font-weight-500 text-text pl-1 nunito">(+994) 55 666 77 88</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template12;
