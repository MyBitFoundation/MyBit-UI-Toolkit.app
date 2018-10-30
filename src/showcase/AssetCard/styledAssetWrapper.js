import styled from 'styled-components';

export default styled.div`
  margin-bottom: 30px;
  padding: 0px;
  position: relative;
  width: 325px;
  > .container {
    width: 90%;
    height: 298px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    > .image-holder {
        background-size: cover;
        background-position: center;
        height: 196px;
        position: relative;
        background-image: ${props => `url(${props.image})`};
        > .image-holder-gradient {
          position: relative;
          top: 0px;
          height: 196px;
          width: 100%;
          background-image: linear-gradient(to left, #0b3f9c, #0083FF) !important;
          z-index: -1;
        };
        > .image-holder-location-icon {
          position: absolute;
          bottom: 18px;
          left: 21px;
          z-index: 1;
        };
        > .image-holder-name {
          position: absolute;
          bottom: 40px;
          font-size: 18px;
          color: #ffffff;
          left: 21px;
          z-index: 1;
          font-weight: bold;
        };
        > .image-holder-location {
          position: absolute;
          bottom: 2px;
          font-size: 14px;
          color: #ffffff;
          padding-left: 42px;
          z-index: 1;
        }
    };

    > .image-holder:after {
        content: ' ';
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent 80px, transparent);
    };

    > .details {
        padding: 5px 10px 0px 10px;
        > .details-funded {
            width: max-content;
            float: left;
            font-size: 14px;
            padding: 0 3px;
            margin: 0;
        };
        > .details-goal {
            text-align: right;
            font-size: 14px;
            padding: 0 5px;
            margin: 0;
        };
        > .center-button {
            width: 100%;
            text-align: center;
            > a > .details-contribute {
                height: 32px;
                font-size: 14px;
                width: 126px;
                background-color: #2E58DA;
                font-weight: bold;
                color: white;
                border: none;
                cursor: pointer;
                margin-top: 10px;
            };
        };
    };
  };
`;
