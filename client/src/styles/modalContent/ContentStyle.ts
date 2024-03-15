import styled from "styled-components";

const ContentStyle = styled.form`
  > h2 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: #dbe1e8;

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: #6c7983;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      resize: none;
      background-color: #131313;
      color: #b2becd;
      border-radius: 0.5rem;
      border: none;
      outline: none;
    }
  }
`;

export default ContentStyle;
