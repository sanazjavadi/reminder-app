/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgSignOut(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" {...props}>
            <path d="M426.657 0H204.79c-28.277 0-51.2 22.923-51.2 51.2v102.4c0 9.426 7.641 17.067 17.067 17.067s17.067-7.641 17.067-17.067V51.2c0-9.426 7.641-17.067 17.067-17.067h221.867c9.426 0 17.067 7.641 17.067 17.067v375.467c0 9.426-7.641 17.067-17.067 17.067H204.79c-9.426 0-17.067-7.641-17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067s-17.067 7.641-17.067 17.067v102.4c0 28.277 22.923 51.2 51.2 51.2h221.867c28.277 0 51.2-22.923 51.2-51.2V51.2C477.857 22.923 454.934 0 426.657 0z" />
            <path d="M341.323 221.867H58.256l56.201-56.201c6.548-6.78 6.36-17.584-.42-24.132-6.614-6.387-17.099-6.387-23.712 0L4.991 226.867a16.872 16.872 0 00-3.686 5.547 17.064 17.064 0 000 13.039 16.913 16.913 0 003.703 5.564l85.333 85.333c6.548 6.78 17.352 6.968 24.132.42 6.78-6.548 6.968-17.352.42-24.132a16.632 16.632 0 00-.42-.42L58.256 256h283.068c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.066-17.068-17.066z" />
        </svg>
    );
}

export default SvgSignOut;
