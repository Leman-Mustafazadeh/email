import PropTypes from "prop-types";

function Team({ size, color }) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3896 9.26902C17.0112 9.26902 17.6073 9.52762 18.0469 9.98794C18.4864 10.4483 18.7333 11.0726 18.7333 11.7236V18.5407C18.7333 20.1322 18.1296 21.6586 17.055 22.7841C15.9804 23.9095 14.5229 24.5417 13.0031 24.5417C11.4834 24.5417 10.0259 23.9095 8.95126 22.7841C7.87663 21.6586 7.27292 20.1322 7.27292 18.5407V11.7236C7.27292 11.0726 7.51985 10.4483 7.95939 9.98794C8.39892 9.52762 8.99507 9.26902 9.61667 9.26902H16.3896ZM16.3896 10.9054H9.61667C9.40947 10.9054 9.21075 10.9916 9.06424 11.145C8.91773 11.2985 8.83542 11.5066 8.83542 11.7236V18.5407C8.83542 19.6983 9.27451 20.8084 10.0561 21.627C10.8377 22.4455 11.8978 22.9054 13.0031 22.9054C14.1085 22.9054 15.1685 22.4455 15.9501 21.627C16.7317 20.8084 17.1708 19.6983 17.1708 18.5407V11.7236C17.1708 11.5066 17.0885 11.2985 16.942 11.145C16.7955 10.9916 16.5968 10.9054 16.3896 10.9054ZM2.84375 9.26902H7.17292C6.75459 9.72494 6.46069 10.29 6.32188 10.9054H2.84375C2.63655 10.9054 2.43784 10.9916 2.29132 11.145C2.14481 11.2985 2.0625 11.5066 2.0625 11.7236V17.4497C2.06209 17.9972 2.19283 18.5361 2.44274 19.0169C2.69266 19.4978 3.05377 19.9053 3.493 20.2021C3.93224 20.499 4.43556 20.6757 4.9569 20.7161C5.47823 20.7565 6.00091 20.6593 6.47708 20.4334C6.61563 20.9679 6.81458 21.4763 7.06458 21.9519C6.35092 22.2786 5.5708 22.4138 4.7947 22.3455C4.01861 22.2771 3.27101 22.0073 2.61945 21.5605C1.9679 21.1136 1.43293 20.5038 1.06288 19.7861C0.692841 19.0684 0.499386 18.2654 0.500001 17.4497V11.7236C0.500001 11.0726 0.746932 10.4483 1.18647 9.98794C1.62601 9.52762 2.22215 9.26902 2.84375 9.26902ZM23.1563 9.26902C23.7779 9.26902 24.374 9.52762 24.8135 9.98794C25.2531 10.4483 25.5 11.0726 25.5 11.7236V17.4508C25.5003 18.2659 25.3068 19.0683 24.937 19.7855C24.5672 20.5026 24.0327 21.1121 23.3817 21.5589C22.7307 22.0056 21.9838 22.2756 21.2082 22.3444C20.4327 22.4132 19.6531 22.2787 18.9396 21.953L18.9979 21.8417C19.2208 21.3988 19.401 20.9287 19.5302 20.4356C20.0061 20.6598 20.5281 20.7557 21.0485 20.7144C21.5689 20.6731 22.0712 20.496 22.5094 20.1992C22.9477 19.9025 23.308 19.4954 23.5574 19.0154C23.8069 18.5353 23.9375 17.9974 23.9375 17.4508V11.7236C23.9375 11.5068 23.8553 11.2988 23.709 11.1454C23.5628 10.992 23.3643 10.9057 23.1573 10.9054H19.6854C19.5463 10.2899 19.252 9.72481 18.8333 9.26902H23.1563ZM13 0.541748C13.4788 0.541748 13.9529 0.640508 14.3952 0.83239C14.8375 1.02427 15.2394 1.30552 15.578 1.66007C15.9165 2.01462 16.1851 2.43553 16.3683 2.89877C16.5515 3.36202 16.6458 3.85852 16.6458 4.35993C16.6458 4.86134 16.5515 5.35784 16.3683 5.82108C16.1851 6.28433 15.9165 6.70524 15.578 7.05979C15.2394 7.41434 14.8375 7.69559 14.3952 7.88747C13.9529 8.07935 13.4788 8.17811 13 8.17811C12.0331 8.17811 11.1057 7.77584 10.422 7.05979C9.73828 6.34374 9.35417 5.37257 9.35417 4.35993C9.35417 3.34729 9.73828 2.37612 10.422 1.66007C11.1057 0.94402 12.0331 0.541748 13 0.541748ZM21.3365 1.63266C21.7468 1.63266 22.1532 1.71731 22.5323 1.88178C22.9115 2.04625 23.256 2.28732 23.5462 2.59122C23.8364 2.89512 24.0665 3.2559 24.2236 3.65297C24.3806 4.05003 24.4615 4.4756 24.4615 4.90538C24.4615 5.33517 24.3806 5.76074 24.2236 6.1578C24.0665 6.55487 23.8364 6.91565 23.5462 7.21955C23.256 7.52345 22.9115 7.76452 22.5323 7.92899C22.1532 8.09346 21.7468 8.17811 21.3365 8.17811C20.5077 8.17811 19.7128 7.83331 19.1268 7.21955C18.5407 6.6058 18.2115 5.77337 18.2115 4.90538C18.2115 4.0374 18.5407 3.20497 19.1268 2.59122C19.7128 1.97746 20.5077 1.63266 21.3365 1.63266ZM4.66354 1.63266C5.07392 1.63266 5.48029 1.71731 5.85943 1.88178C6.23857 2.04625 6.58307 2.28732 6.87325 2.59122C7.16343 2.89512 7.39362 3.2559 7.55067 3.65297C7.70771 4.05003 7.78854 4.4756 7.78854 4.90538C7.78854 5.33517 7.70771 5.76074 7.55067 6.1578C7.39362 6.55487 7.16343 6.91565 6.87325 7.21955C6.58307 7.52345 6.23857 7.76452 5.85943 7.92899C5.48029 8.09346 5.07392 8.17811 4.66354 8.17811C3.83474 8.17811 3.03989 7.83331 2.45383 7.21955C1.86778 6.6058 1.53854 5.77337 1.53854 4.90538C1.53854 4.0374 1.86778 3.20497 2.45383 2.59122C3.03989 1.97746 3.83474 1.63266 4.66354 1.63266ZM13 2.17811C12.4475 2.17811 11.9176 2.40798 11.5269 2.81715C11.1362 3.22632 10.9167 3.78128 10.9167 4.35993C10.9167 4.93858 11.1362 5.49354 11.5269 5.90271C11.9176 6.31188 12.4475 6.54175 13 6.54175C13.5525 6.54175 14.0824 6.31188 14.4731 5.90271C14.8638 5.49354 15.0833 4.93858 15.0833 4.35993C15.0833 3.78128 14.8638 3.22632 14.4731 2.81715C14.0824 2.40798 13.5525 2.17811 13 2.17811ZM21.3365 3.26902C21.1313 3.26902 20.9281 3.31135 20.7385 3.39358C20.5489 3.47582 20.3767 3.59635 20.2316 3.7483C20.0865 3.90025 19.9714 4.08064 19.8929 4.27918C19.8144 4.47771 19.774 4.69049 19.774 4.90538C19.774 5.12028 19.8144 5.33306 19.8929 5.53159C19.9714 5.73013 20.0865 5.91052 20.2316 6.06247C20.3767 6.21442 20.5489 6.33495 20.7385 6.41719C20.9281 6.49942 21.1313 6.54175 21.3365 6.54175C21.7509 6.54175 22.1483 6.36935 22.4413 6.06247C22.7343 5.75559 22.899 5.33938 22.899 4.90538C22.899 4.47139 22.7343 4.05518 22.4413 3.7483C22.1483 3.44142 21.7509 3.26902 21.3365 3.26902ZM4.66354 3.26902C4.45835 3.26902 4.25517 3.31135 4.0656 3.39358C3.87603 3.47582 3.70378 3.59635 3.55869 3.7483C3.4136 3.90025 3.2985 4.08064 3.21998 4.27918C3.14146 4.47771 3.10104 4.69049 3.10104 4.90538C3.10104 5.12028 3.14146 5.33306 3.21998 5.53159C3.2985 5.73013 3.4136 5.91052 3.55869 6.06247C3.70378 6.21442 3.87603 6.33495 4.0656 6.41719C4.25517 6.49942 4.45835 6.54175 4.66354 6.54175C5.07794 6.54175 5.47537 6.36935 5.7684 6.06247C6.06142 5.75559 6.22604 5.33938 6.22604 4.90538C6.22604 4.47139 6.06142 4.05518 5.7684 3.7483C5.47537 3.44142 5.07794 3.26902 4.66354 3.26902Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

Team.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Team;
