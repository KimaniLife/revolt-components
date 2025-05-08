import React, { forwardRef, useState } from "react";
import { Show, Hide } from "@styled-icons/boxicons-solid";

import styled, { css } from "styled-components";
import { InputBox } from "./InputBox";

export type Props = React.ComponentProps<typeof InputBox>;

const Base = styled.div<Pick<Props, "palette">>`
    position: relative;

    .eye {
        position: absolute;
        right: 8px;
        top: 8px;

        width: 25px;
        height: 25px;

        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        ${(props) =>
            props.palette === "primary"
                ? css`
                      color: var(--foreground);
                  `
                : css`
                      color: var(--secondary-foreground);
                  `}
    }
`;

export const PasswordBox: React.FC<Props> = forwardRef((props, ref) => {
    const [visiblePass, setVisiblePass] = useState(false);

    const Toggle = visiblePass ? Hide : Show;

    return (
        <Base palette={props.palette}>
            <InputBox
                {...props}
                ref={ref}
                type={visiblePass ? "text" : "password"}
            />
            <Toggle
                className="eye"
                onClick={() => setVisiblePass(!visiblePass)}
            />
        </Base>
    );
});
