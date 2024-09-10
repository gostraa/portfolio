import styled from "styled-components";

export const SwitchWrapper = styled.div`
  position: relative;
  width: 100px;

  .on,
  .off {
    position: absolute;
    top: 13px;
    pointer-events: none;
    font-family: "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    width: 50%;
    text-align: center;
  }

  .on {
    left: 0;
    padding-left: 2px;
    color: #1a1a1a;
  }

  .off {
    right: 0;
    padding-right: 4px;
    color: #1a1a1a;
  }

  input.check-toggle {
    position: absolute;
    visibility: hidden;
  }

  input.check-toggle + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
    padding: 1px;
    width: 100px;
    height: 35px;
    background: var(--surface-secondary);
    border-radius: 60px;
  }

  input.check-toggle + label:before {
    content: "";
    position: absolute;
    border-radius: 60px;
  }

  input.check-toggle + label:after {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    bottom: 4px;
    width: 48px;
    background-color: #fff;
    border-radius: 52px;
    transition: margin 0.2s;
  }

  input.check-toggle:checked + label:after {
    margin-left: 44px;
  }
`;
