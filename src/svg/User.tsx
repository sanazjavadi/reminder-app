/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgUser(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" {...props}>
            <path
                d="M240 8C111.872 8 8 111.872 8 240c0 56.256 20.032 107.824 53.336 147.992 15.512-63.176 63.688-113.384 125.552-132.04C161.048 238.744 144 209.376 144 176c0-53.016 42.984-96 96-96s96 42.984 96 96c0 33.376-17.048 62.744-42.896 79.952 61.864 18.656 110.04 68.864 125.552 132.04C451.968 347.824 472 296.256 472 240 472 111.872 368.128 8 240 8z"
                fill="#efece8"
            />
            <path
                d="M293.104 255.952C318.952 238.744 336 209.376 336 176c0-53.016-42.984-96-96-96s-96 42.984-96 96c0 33.376 17.048 62.744 42.896 79.952-61.864 18.656-110.04 68.864-125.552 132.04 0 0 0 .008.008.008a237.163 237.163 0 007.832 8.944c.648.712 1.328 1.392 1.992 2.088a239.937 239.937 0 006.296 6.464c.888.872 1.792 1.712 2.696 2.568a233.567 233.567 0 006.04 5.568c1.016.896 2.048 1.784 3.072 2.664 2.008 1.72 4.04 3.408 6.112 5.056 1.088.872 2.184 1.728 3.28 2.584a214.91 214.91 0 006.376 4.72c1.112.792 2.208 1.6 3.336 2.376 2.272 1.568 4.584 3.072 6.912 4.56 1.048.664 2.072 1.352 3.128 2.008a237.722 237.722 0 008.184 4.792c.728.408 1.44.848 2.176 1.248a231.937 231.937 0 0010.872 5.592c.088.04.184.08.272.12 3.512 1.68 7.08 3.272 10.688 4.776 1.12.472 2.264.888 3.392 1.336 2.608 1.04 5.216 2.064 7.872 3.008 1.408.504 2.832.96 4.248 1.44 2.416.816 4.848 1.608 7.296 2.336 1.552.464 3.112.896 4.68 1.328 2.368.656 4.752 1.28 7.16 1.864a219.555 219.555 0 0012.152 2.584c1.648.304 3.288.616 4.952.88 2.512.408 5.04.752 7.576 1.08 1.6.208 3.192.44 4.8.608 2.8.304 5.624.52 8.448.72 1.368.096 2.72.24 4.088.312 4.216.24 8.448.376 12.72.376s8.504-.136 12.72-.36c1.368-.072 2.728-.216 4.088-.312 2.832-.2 5.656-.416 8.448-.72 1.608-.176 3.2-.4 4.8-.608 2.536-.328 5.064-.672 7.576-1.08 1.656-.272 3.304-.576 4.952-.88a215.477 215.477 0 0012.152-2.584c2.4-.584 4.784-1.208 7.16-1.864 1.56-.432 3.128-.864 4.68-1.328 2.456-.736 4.88-1.528 7.296-2.336 1.416-.48 2.848-.936 4.248-1.44a245.374 245.374 0 007.872-3.008c1.128-.448 2.272-.872 3.392-1.336a226.642 226.642 0 0010.64-4.76c.104-.048.216-.096.32-.144 3.68-1.768 7.304-3.64 10.872-5.592.736-.4 1.448-.84 2.176-1.248a237.722 237.722 0 008.184-4.792c1.056-.648 2.088-1.336 3.128-2.008 2.328-1.488 4.64-3 6.912-4.56 1.12-.776 2.224-1.576 3.336-2.376a247.51 247.51 0 006.376-4.72 202.128 202.128 0 003.28-2.584 230.055 230.055 0 006.112-5.056c1.032-.88 2.064-1.768 3.072-2.664a233.567 233.567 0 006.04-5.568c.896-.856 1.808-1.704 2.696-2.568a228.37 228.37 0 006.296-6.464c.656-.704 1.336-1.384 1.992-2.088 2.68-2.92 5.304-5.896 7.832-8.944 0 0 0-.008.008-.008-15.504-63.184-63.68-113.4-125.552-132.048z"
                fill="#c6c3bd"
            />
            <path
                d="M240 0C107.664 0 0 107.664 0 240c0 57.96 20.656 111.184 54.992 152.704.088.12.096.272.192.384 24.792 29.896 55.928 52.816 90.624 67.624.4.168.792.352 1.192.52 2.808 1.184 5.648 2.28 8.496 3.352 1.12.424 2.24.856 3.376 1.264 2.456.88 4.928 1.712 7.416 2.512 1.592.512 3.184 1.016 4.792 1.496 2.2.656 4.408 1.288 6.632 1.888 1.952.528 3.92 1.016 5.888 1.488 1.992.48 3.992.96 6 1.384 2.24.48 4.504.904 6.776 1.32 1.824.336 3.64.688 5.48.984 2.52.408 5.056.728 7.6 1.056 1.64.208 3.272.448 4.92.624 2.88.304 5.784.52 8.696.72 1.352.096 2.696.24 4.056.312 4.248.24 8.544.368 12.872.368s8.624-.128 12.888-.352c1.36-.072 2.704-.216 4.056-.312 2.912-.208 5.816-.416 8.696-.72 1.648-.176 3.28-.416 4.92-.624 2.544-.328 5.08-.648 7.6-1.056 1.832-.296 3.656-.648 5.48-.984 2.264-.416 4.528-.84 6.776-1.32 2.008-.432 4-.904 6-1.384 1.968-.48 3.936-.968 5.888-1.488a232.661 232.661 0 0011.424-3.384c2.488-.8 4.96-1.632 7.416-2.512 1.128-.408 2.248-.84 3.376-1.264a243.168 243.168 0 008.496-3.352c.4-.168.792-.352 1.192-.52a239.997 239.997 0 0090.624-67.624c.096-.112.104-.272.192-.384C459.344 351.184 480 297.96 480 240 480 107.664 372.336 0 240 0zm47.872 249.736a84.742 84.742 0 01-9.8 5.48c-.4.192-.792.392-1.192.576-23.168 10.536-50.592 10.536-73.76 0-.4-.184-.8-.384-1.192-.576a84.083 84.083 0 01-9.8-5.48C168.008 234.024 152 206.864 152 176c0-48.52 39.48-88 88-88s88 39.48 88 88c0 30.864-16.008 58.024-40.128 73.736zm-98.72 16.896c.672.376 1.336.776 2.016 1.136a99.592 99.592 0 007.272 3.512c1.896.832 3.856 1.536 5.808 2.256.384.136.768.288 1.152.424 10.848 3.84 22.456 6.04 34.6 6.04 12.144 0 23.752-2.2 34.592-6.04.384-.136.768-.288 1.152-.424 1.952-.72 3.912-1.424 5.808-2.256a99.592 99.592 0 007.272-3.512c.68-.368 1.344-.76 2.016-1.136 1.144-.64 2.312-1.248 3.432-1.936 56.32 18.272 100.088 64.176 115.56 121.112-20.008 23.272-44.664 42.44-72.576 55.952-.12.056-.232.12-.352.176-2.856 1.376-5.76 2.672-8.688 3.936-.664.28-1.32.568-1.984.848a217.023 217.023 0 01-7.76 3.064 159.85 159.85 0 01-3.272 1.192 230.572 230.572 0 01-6.976 2.368c-1.456.464-2.92.904-4.384 1.336a202.08 202.08 0 01-6.28 1.784c-1.776.472-3.568.904-5.36 1.328-1.88.448-3.752.904-5.648 1.304-2.072.44-4.16.816-6.24 1.192-1.688.312-3.368.64-5.072.912-2.344.368-4.712.664-7.072.96-1.496.192-2.984.416-4.496.576-2.696.288-5.416.472-8.128.664-1.208.08-2.408.216-3.632.28-3.96.208-7.928.32-11.912.32s-7.952-.112-11.904-.32c-1.216-.064-2.416-.192-3.632-.28-2.72-.184-5.432-.376-8.128-.664-1.512-.16-3-.384-4.496-.576-2.36-.296-4.728-.592-7.072-.96-1.704-.272-3.384-.6-5.072-.912-2.088-.376-4.176-.76-6.24-1.192-1.896-.4-3.776-.856-5.648-1.304-1.792-.432-3.584-.856-5.36-1.328-2.104-.56-4.2-1.168-6.28-1.784a212.543 212.543 0 01-4.384-1.336 223.256 223.256 0 01-6.976-2.368 217.023 217.023 0 01-11.032-4.256c-.664-.272-1.312-.56-1.976-.84a223.812 223.812 0 01-8.696-3.936 7.216 7.216 0 01-.352-.176c-27.912-13.504-52.568-32.672-72.576-55.952 15.464-56.944 59.24-102.848 115.56-121.112 1.112.68 2.272 1.288 3.416 1.928zm232.68 103.952c-18.136-53.552-59.512-96.832-112.376-117.392C330.6 234.144 344 206.64 344 176c0-57.344-46.656-104-104-104s-104 46.656-104 104c0 30.64 13.4 58.144 34.552 77.192-52.864 20.568-94.24 63.84-112.376 117.392C31.672 333.792 16 288.704 16 240 16 116.488 116.488 16 240 16s224 100.488 224 224c0 48.704-15.672 93.792-42.168 130.584z"
                fill="#4b413a"
            />
        </svg>
    );
}

export default SvgUser;
