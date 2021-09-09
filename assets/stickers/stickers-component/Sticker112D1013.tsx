import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/editor/workspace/erin-components/sticker/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 62
// height: 68
function Sticker112D1013(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={62 * stickerScale}
      height={68 * stickerScale}
      fill="none"
      {...props}
    >
      <Path
        d="M18.534 13.465l-.014.01-.043.03c-.166.127-.335.258-.506.394l-.002.002c-.138.111-.276.225-.417.342l-.06.05-.118.1-.043.039a16.11 16.11 0 00-.281.245l-.129.117-.032.03a20.437 20.437 0 00-2.068 2.173c-.005.008-.011.014-.017.02.903-1.12 2.152-2.437 3.73-3.552zm-.001-1.024c-.1 0-.197.012-.294.039a1.047 1.047 0 00-.345.165c-1.414 1.001-2.738 2.261-3.93 3.744a1.001 1.001 0 00.188 1.436c.193.146.423.217.653.217.315 0 .628-.135.838-.392l.003-.003.013-.016.004-.005a19.418 19.418 0 011.958-2.057l.015-.013.018-.016.12-.11.034-.03.015-.013c.073-.065.145-.128.22-.191l.02-.018.021-.019.114-.096.056-.048c.131-.11.264-.22.399-.327h.002c.162-.13.322-.255.473-.37l.028-.02.004-.002.017-.012.003-.002a1.024 1.024 0 00.262-.277.99.99 0 00.159-.538c0-.552-.454-1.002-1.022-1.025-.016-.002-.033-.002-.046-.002zM31.57 8.513c-.009 0-.018 0-.025.002-.12.006-.24.015-.363.024a21.759 21.759 0 00-2.714.397l-.172.037-.066.014-.305.07-.053.013a6.285 6.285 0 00-.155.037l-.074.02a23.888 23.888 0 00-1.157.317c-.017.004-.033.01-.05.015l-.017.006c1.847-.623 3.68-.87 5.152-.952zm.002-1.025h-.033l-.039.002c-1.945.11-3.773.448-5.431 1.008-.549.185-.843.761-.658 1.292.149.429.563.7 1.008.7.108 0 .218-.016.326-.05l.016-.003.015-.005.014-.004.025-.009c.183-.055.38-.111.582-.166l.006-.001c.166-.046.338-.09.506-.132l.071-.018.147-.035.025-.006.025-.005.292-.067.02-.004.044-.01.162-.035.022-.004.02-.004a20.822 20.822 0 012.87-.392H31.636c.035-.003.071-.006.106-.012.534-.082.925-.542.892-1.073a1.004 1.004 0 00-.284-.638 1.07 1.07 0 00-.596-.31.811.811 0 00-.182-.019zM13.383 19.02c-.07.117-.142.234-.211.354.05-.088.12-.207.21-.353zm0-1.024a1.08 1.08 0 00-.926.518c-.077.127-.15.25-.216.363-.285.495-.1 1.118.414 1.393.163.087.342.129.515.129.374 0 .736-.189.93-.525l.187-.313a.994.994 0 00-.057-1.159 1.078 1.078 0 00-.848-.406z"
        fill="#51332A"
      />
      <Path
        d="M38.695 1.024c.983 0 1.988.08 2.988.236 2.506.392 4.974 1.318 7.34 2.755 2.026 1.231 3.63 2.549 4.77 3.916 2.299 2.763 2.264 5.235 1.83 6.823a6.632 6.632 0 01-1.374 2.563c-.144.168-.296.33-.455.487l.036.05.02.027c.056.08.11.161.163.24l.02.03.006.01c.056.082.103.158.15.23l.02.033.005.01c.044.07.088.14.13.21l.009.015.04.063.124.215.057.1.107.196c.022.042.046.084.067.127l.072.142.091.18.068.143.066.141.088.2c.023.051.046.103.067.155l.046.11c.034.084.067.17.1.256.015.034.027.068.04.102.033.09.066.181.1.28l.007.018c.008.025.018.05.025.074l.06.182.021.067.006.018c.032.102.062.206.092.304.008.032.018.063.025.094.028.1.057.206.083.311l.004.016c.006.025.011.051.018.076.048.2.093.406.132.61l.015.083.003.014a9.83 9.83 0 01.07.432c.017.106.03.218.044.331l.003.02.01.083.02.207c.003.028.005.057.006.085l.003.021c.01.116.018.23.023.339.004.039.005.077.007.116.005.11.01.223.012.336v.008c.002.038.002.075.002.112.002.11.002.223 0 .347V25.488l-.008.218c0 .033-.003.066-.004.099l-.002.022c-.005.117-.012.237-.02.354l-.01.122c-.01.119-.02.244-.034.371l-.003.023-.01.086a11.42 11.42 0 01-.029.236l-.007.051v.005c-.02.147-.042.296-.067.445l-.013.076-.004.015-.008.05c-.01.052-.018.106-.027.16-.537 2.874-1.94 5.646-4.06 8.013a44.73 44.73 0 01-1.144 1.228c.48.323.998.653 1.551.986 2.966 1.786 5.465 4.195 7.225 6.965l.077.122a8.883 8.883 0 011.342 4.22 8.601 8.601 0 01-.92 4.355c-.296.58-.625 1.147-.986 1.694a6.912 6.912 0 01-1.125 2.84 7.052 7.052 0 01-3.252 2.581 6.174 6.174 0 01-1.833.437c-.615.363-1.241.687-1.872.97-.65.291-1.31.627-2.02 1.027-.58.328-1.194.631-1.83.906-.4.47-.872.875-1.412 1.21l-.228.136a7.323 7.323 0 01-3.686.987 7.544 7.544 0 01-3.205-.713 19.454 19.454 0 01-2.005-.176 9.377 9.377 0 01-3.568-1.274c-.26.018-.52.027-.778.027-2.303 0-4.578-.7-6.41-1.97-1.227-.844-2.131-1.853-2.69-3-.003-.004-.006-.009-.007-.014-.736-1.527-.79-3.227-.15-4.664a.019.019 0 00.004-.01c.792-1.757 2.608-2.939 4.517-2.939h.015a22.8 22.8 0 01.02-1.147c.034-.755.043-1.467.028-2.123-.268.034-.535.065-.8.094-.7.075-1.408.112-2.103.112-2.512 0-4.886-.478-7.059-1.419l-.152-.069-.047-.02-.012-.006-.076-.034a19.72 19.72 0 01-.419-.198l-.005-.003-.046-.023-.22-.11a3.164 3.164 0 00-.077-.04l-.02-.01c-.119-.062-.232-.124-.341-.184a12.198 12.198 0 01-.421-.244l-.016-.009a7.748 7.748 0 00-.094-.056c-.063-.039-.127-.078-.189-.118-.026-.017-.052-.032-.077-.05l-.021-.013c-.108-.069-.205-.134-.299-.196-.033-.023-.065-.046-.1-.068l-.003-.003c-.095-.066-.189-.133-.282-.2l-.096-.07a14.416 14.416 0 01-.276-.211l-.019-.014-.067-.053-.165-.134-.064-.054-.016-.013c-.09-.077-.18-.15-.262-.224l-.081-.071a14.515 14.515 0 01-.248-.228l-.014-.012-.06-.058a14.376 14.376 0 01-.451-.45l-.055-.059-.01-.01a11.998 11.998 0 01-.494-.557l-.012-.015-.048-.057a4.618 4.618 0 01-.17-.212l-.013-.017a9.82 9.82 0 01-.182-.236c-.022-.03-.045-.059-.066-.09a10.809 10.809 0 01-.23-.322l-.094-.14a23.294 23.294 0 01-.206-.317l-.083-.135c-.036-.058-.07-.116-.103-.172-.027-.047-.056-.094-.082-.141l-.002-.004a3.56 3.56 0 01-.067-.118l-.108-.199c-.019-.033-.036-.067-.054-.1a27.564 27.564 0 01-.114-.222c-.012-.022-.022-.045-.033-.068l-.006-.011a16.87 16.87 0 01-.107-.223l-.004-.01-.017-.034c-.037-.078-.073-.16-.113-.25l-.004-.008-.016-.036a12.845 12.845 0 01-.113-.269l-.01-.024-.025-.06a7.674 7.674 0 01-1.308.113c-.809 0-1.595-.13-2.337-.386-1.605-.552-3.742-1.923-4.809-5.311-.527-1.679-.749-3.698-.657-6.003.106-2.69.708-5.176 1.792-7.387 1.974-4.036 5.286-7.035 9.578-8.67a19.83 19.83 0 015.225-1.215c1.666-1.165 3.008-1.814 3.47-2.024.442-.25 1.755-.947 3.696-1.612a18.81 18.81 0 013.215-2.928 18.647 18.647 0 014.464-2.382 17.917 17.917 0 016.176-1.09zM8.885 37.617c.784 0 1.57-.188 2.288-.523a9.76 9.76 0 00.696-.359c.135.733.35 1.537.686 2.36.001.008.005.016.008.023.03.074.061.146.093.22.005.012.012.024.016.036.03.069.061.137.094.206.005.013.013.024.018.037l.087.181.032.066c.031.06.062.121.095.182l.043.083.09.162.056.1.066.114.085.141.068.11.067.109.099.15.077.113.057.08.13.181c.02.025.037.049.054.073l.147.193.051.064.099.12a29.742 29.742 0 00.217.256l.054.06a6.558 6.558 0 00.232.25c.117.123.238.245.364.365l.06.056c.067.063.134.124.203.185.02.02.044.04.066.059.067.061.14.122.211.181l.066.055.136.11.07.055c.073.058.149.115.226.173a10.745 10.745 0 00.88.592l.088.053c.085.052.173.102.262.153l.089.05a14.055 14.055 0 00.368.197l.183.093.041.02c.117.057.235.113.355.168l.073.032c.057.027.113.053.17.078 1.897.822 3.956 1.207 6.028 1.207.608 0 1.218-.034 1.825-.098.951-.102 2.093-.256 3.355-.49.267 1.597.267 3.505.201 5.023-.094 2.114.16 4.23.774 6.25l-.263-.443c-.671-1.137-1.666-2.332-3.022-2.346h-.03c-.948 0-1.836.644-2.215 1.485-.38.854-.285 1.854.121 2.697.41.84 1.102 1.527 1.884 2.065 1.43.994 3.188 1.517 4.947 1.517.483 0 .966-.039 1.443-.12a6.814 6.814 0 003.265 1.393 16.61 16.61 0 002.307.163c.772.462 1.656.7 2.542.7a4.726 4.726 0 002.558-.74c.484-.3.865-.693 1.136-1.135.907-.35 1.65-.724 2.195-1.033.726-.41 1.465-.79 2.228-1.132.58-.26 1.339-.646 2.177-1.183a3.657 3.657 0 001.614-.26l.184-.078a4.548 4.548 0 002.733-3.95c.417-.587.81-1.227 1.166-1.924 1.015-1.994.87-4.363-.319-6.266l-.068-.107c-1.596-2.517-3.816-4.614-6.413-6.177-1.265-.76-2.791-1.765-3.982-2.814a41.856 41.856 0 003.002-3.027c1.757-1.961 3.016-4.313 3.492-6.863l.03-.177c.003-.027.01-.053.013-.079.02-.125.04-.25.057-.374l.008-.047.023-.197.01-.092a8.758 8.758 0 00.036-.412c.008-.098.014-.196.018-.293l.005-.101.006-.18.001-.096a13.69 13.69 0 000-.286c0-.034 0-.066-.003-.1a12.263 12.263 0 00-.01-.275l-.004-.097a8.177 8.177 0 00-.02-.277l-.008-.088-.017-.168-.01-.084c-.012-.091-.022-.181-.036-.27-.004-.029-.008-.058-.014-.085a7.636 7.636 0 00-.043-.266l-.015-.079a9.854 9.854 0 00-.106-.496c-.007-.025-.012-.049-.02-.074-.02-.085-.043-.169-.065-.252a1.132 1.132 0 01-.02-.077l-.074-.247-.022-.07a9.237 9.237 0 00-.048-.146c-.009-.025-.018-.05-.025-.074a13.427 13.427 0 00-.083-.228l-.03-.083-.083-.208a3.36 3.36 0 00-.037-.089l-.054-.125c-.023-.055-.048-.109-.072-.163-.019-.04-.035-.078-.055-.116l-.057-.117a6.817 6.817 0 00-.071-.146l-.061-.116c-.02-.035-.037-.07-.055-.104-.028-.054-.06-.107-.088-.16l-.046-.082a10.57 10.57 0 00-.142-.24c-.033-.057-.07-.115-.105-.173-.008-.011-.015-.022-.02-.033l-.125-.191-.022-.034c-.045-.067-.09-.133-.136-.198l-.014-.02a12.44 12.44 0 00-1.634-1.879c.255-.114.49-.232.703-.35 1.138-.624 2.04-1.624 2.376-2.843.94-3.437-2.735-6.394-5.513-8.08-1.956-1.19-4.118-2.058-6.401-2.415-.9-.14-1.765-.205-2.588-.205-7.96 0-12.277 5.965-12.334 6.043a19.912 19.912 0 00-.577.187c-2.149.724-3.466 1.509-3.466 1.509s-1.417.601-3.251 1.897a24.39 24.39 0 00-.487.354c-.108 0-9.29.069-13.437 8.548-.987 2.016-1.465 4.223-1.553 6.45-.125 3.16.329 7.751 3.803 8.947.478.168.982.245 1.488.245zM38.696 0c-2.253 0-4.457.39-6.55 1.16a19.705 19.705 0 00-4.722 2.52 19.887 19.887 0 00-3.206 2.877c-1.81.64-3.06 1.293-3.564 1.574-.527.241-1.793.866-3.363 1.939-1.273.132-3.136.46-5.227 1.255-4.549 1.732-8.06 4.909-10.152 9.186C.769 22.847.133 25.466.021 28.296c-.097 2.418.141 4.55.702 6.338 1.194 3.797 3.634 5.348 5.469 5.98a8.244 8.244 0 003.335.421l.115.24.005.01c.014.025.024.049.038.074a9.375 9.375 0 00.18.347l.116.215c.024.042.05.084.074.128l.002.004.088.152.11.185c.03.05.06.097.092.147l.09.143c.044.067.086.133.132.2l.101.149.074.106c.057.08.115.162.174.242l.071.097c.062.084.127.167.196.256l.013.016.055.07.13.16c.019.023.035.044.055.065l.011.014c.074.089.149.177.224.263l.072.08c.075.085.154.173.237.26l.007.008.061.065c.158.166.32.33.487.486l.066.064.013.012c.088.082.178.165.267.245l.088.078c.09.078.184.159.281.24l.016.013.071.058a9.282 9.282 0 00.255.204l.018.014c.1.077.199.154.296.226l.104.077a15.624 15.624 0 00.732.501l.02.012.086.056a14.964 14.964 0 00.306.188l.015.01c.11.065.224.131.337.195l.114.065c.117.064.24.13.365.196l.02.011.085.045.234.117c.017.01.037.019.057.028.144.07.294.142.443.21l.084.038.01.004.043.02.172.077c2.309 1.001 4.831 1.51 7.494 1.51.608 0 1.225-.028 1.84-.082-.006.303-.016.614-.03.93l-.01.261c-1.924.352-3.64 1.655-4.453 3.462l-.004.01c-.76 1.706-.703 3.71.16 5.503l.008.016c.638 1.308 1.659 2.45 3.034 3.397 2.01 1.396 4.507 2.163 7.03 2.163.169 0 .338-.003.506-.01a10.422 10.422 0 003.686 1.247c.626.088 1.264.147 1.9.177a8.698 8.698 0 003.465.722 8.411 8.411 0 004.49-1.287 7.01 7.01 0 001.492-1.233 20.006 20.006 0 001.712-.859c.68-.383 1.312-.704 1.931-.983.593-.266 1.188-.569 1.768-.903a7.334 7.334 0 001.9-.488 8.1 8.1 0 003.729-2.964 7.98 7.98 0 001.251-3.032c.336-.523.645-1.064.924-1.612a9.586 9.586 0 001.028-4.86 9.883 9.883 0 00-1.493-4.694l-.08-.129c-1.845-2.906-4.462-5.429-7.569-7.3a33.075 33.075 0 01-.502-.306l.336-.37c2.243-2.505 3.73-5.446 4.302-8.5l.03-.181.009-.044.002-.014.014-.08c.025-.157.05-.315.07-.47v-.003l.01-.06c.012-.087.02-.17.03-.253.004-.032.008-.063.01-.096l.004-.022a16.092 16.092 0 00.068-.906l.001-.021.005-.109.008-.233v-.126a11.484 11.484 0 00-.001-.492v-.01c-.004-.12-.008-.242-.014-.36a2.822 2.822 0 00-.007-.125c-.006-.118-.016-.241-.026-.365v-.02a2.568 2.568 0 01-.008-.094l-.023-.225-.011-.09-.002-.021c-.016-.121-.03-.242-.047-.357l-.018-.113a11.464 11.464 0 00-.059-.352l-.004-.017c-.004-.03-.01-.06-.016-.09-.041-.221-.09-.444-.141-.659-.008-.027-.014-.056-.02-.082l-.004-.016a13.796 13.796 0 00-.216-.767l-.006-.017-.023-.075a6.933 6.933 0 00-.093-.28l-.005-.017c-.038-.106-.073-.205-.11-.302l-.041-.11a8.71 8.71 0 00-.158-.394 9.267 9.267 0 00-.169-.382c-.022-.052-.047-.103-.07-.154-.023-.05-.05-.103-.075-.155a9.032 9.032 0 00-.096-.195l-.08-.154c-.023-.045-.048-.091-.07-.136a11.11 11.11 0 00-.117-.212l-.06-.108a11.411 11.411 0 00-.135-.232l-.043-.07-.008-.014-.14-.226a7.623 7.623 0 001.526-2.887c.497-1.815.547-4.629-2.029-7.725-1.212-1.457-2.905-2.85-5.031-4.142C47.105 1.636 44.5.66 41.855.247A20.847 20.847 0 0038.695 0zM8.885 36.593c-.397 0-.778-.062-1.134-.184-2.93-1.009-3.198-5.41-3.098-7.944.09-2.227.577-4.262 1.453-6.052 1.598-3.268 4.167-5.597 7.633-6.925 2.631-1.008 4.825-1.033 4.847-1.033.234-.001.462-.077.646-.214.148-.11.302-.221.456-.33l.004-.003.006-.004c1.705-1.203 3.04-1.78 3.053-1.786.044-.02.088-.041.13-.066.01-.006 1.26-.74 3.255-1.413l.011-.004c.18-.06.362-.119.542-.175.222-.068.416-.206.548-.391.01-.015 1.047-1.435 2.987-2.829 2.558-1.84 5.41-2.773 8.472-2.773.79 0 1.604.064 2.417.192 2.028.316 4.046 1.08 6.004 2.268 2.227 1.353 5.844 4.055 5.05 6.953-.242.887-.925 1.694-1.873 2.214a8.222 8.222 0 01-.624.311 1.03 1.03 0 00-.598.757.998.998 0 00.303.904c.568.537 1.07 1.116 1.498 1.723l.013.017.123.18.01.015.012.017.112.172.01.018.01.014.097.156.011.017.022.04c.032.053.062.107.095.16.014.024.026.05.042.075l.079.145.05.094.054.106.066.132a8.798 8.798 0 01.098.21l.066.147c.018.037.033.076.05.114.011.027.02.054.032.08l.075.187.028.074.073.206.009.025.015.042.043.132.013.038.007.024.067.223.02.069.06.227.004.017c.004.017.01.033.013.05a9.534 9.534 0 01.107.501l.003.017.04.24.012.077.03.245.004.025.005.05c.006.051.012.102.016.154a.415.415 0 01.004.05l.004.028a8.976 8.976 0 01.03.59v.006a5.645 5.645 0 01.002.344v.088l-.005.165-.003.07-.001.023c-.004.09-.01.18-.016.268a13.619 13.619 0 01-.035.378l-.002.028-.006.055-.022.182-.002.016-.004.027a9.814 9.814 0 01-.053.345l-.009.056-.003.016a2.36 2.36 0 01-.013.071c-.004.03-.01.062-.016.094-.423 2.269-1.548 4.474-3.25 6.376a41.302 41.302 0 01-2.926 2.951.998.998 0 00.012 1.501c1.042.919 2.434 1.903 4.135 2.926 2.5 1.505 4.597 3.525 6.07 5.842l.06.1c1.026 1.64 1.13 3.616.277 5.287a14.332 14.332 0 01-1.089 1.799 1 1 0 00-.183.531 3.544 3.544 0 01-2.27 3.13 2.544 2.544 0 01-1.13.183l-.07-.002c-.209 0-.415.06-.589.172-.665.426-1.35.798-2.036 1.106-.751.338-1.509.723-2.315 1.178-.639.36-1.33.684-2.055.965a1.049 1.049 0 00-.518.428c-.2.325-.468.592-.796.795l-.147.09a3.645 3.645 0 01-1.834.487 3.87 3.87 0 01-1.982-.545 1.093 1.093 0 00-.56-.155 15.59 15.59 0 01-2.153-.152c-1-.14-1.95-.547-2.746-1.173a1.082 1.082 0 00-.856-.216c-.412.07-.834.105-1.26.105-1.56 0-3.095-.47-4.324-1.324l-.004-.002c-.724-.498-1.241-1.058-1.54-1.665-.302-.633-.342-1.327-.106-1.86.227-.5.747-.864 1.238-.864h.014c.86.009 1.624.999 2.113 1.828a394.667 394.667 0 01.188.315l.074.128c.195.328.554.518.926.518.14 0 .28-.026.415-.082.497-.203.757-.731.606-1.23a17.645 17.645 0 01-.732-5.92c.093-2.075.02-3.834-.213-5.229a1.019 1.019 0 00-.44-.676 1.09 1.09 0 00-.81-.167 43.56 43.56 0 01-3.273.477c-.57.06-1.144.093-1.708.093-2.002 0-3.884-.376-5.59-1.116l-.09-.04a19.74 19.74 0 01-.067-.03l-.012-.005-.057-.026c-.11-.05-.22-.103-.328-.156l-.024-.012-.013-.006-.17-.085-.048-.026-.027-.014a9.86 9.86 0 01-.26-.14c-.028-.017-.057-.031-.083-.047-.079-.045-.16-.092-.24-.14l-.018-.01-.063-.038c-.049-.03-.097-.059-.143-.09l-.045-.027-.029-.02a9.497 9.497 0 01-.51-.35l-.072-.053c-.066-.05-.134-.1-.205-.157l-.025-.02-.038-.03c-.04-.032-.082-.064-.122-.098l-.04-.032-.019-.017a8.11 8.11 0 01-.193-.165l-.06-.052a10.45 10.45 0 01-.182-.168l-.014-.012-.04-.039a8.775 8.775 0 01-.329-.328l-.037-.04-.01-.011a8.717 8.717 0 01-.162-.175l-.047-.055a7.686 7.686 0 01-.153-.178l-.018-.02-.026-.032-.088-.109a.908.908 0 01-.029-.037l-.017-.02a30.55 30.55 0 01-.132-.174l-.05-.065c-.038-.055-.078-.109-.117-.164l-.05-.072c-.023-.035-.047-.068-.068-.102-.031-.046-.061-.09-.09-.136-.021-.033-.04-.066-.062-.098l-.061-.1-.076-.127-.06-.102-.002-.004a7.465 7.465 0 01-.13-.234l-.04-.075c-.03-.056-.057-.11-.085-.166l-.02-.04-.008-.018a5.089 5.089 0 01-.08-.166l-.007-.013-.01-.021c-.028-.062-.057-.124-.084-.187l-.008-.015-.006-.018a7.08 7.08 0 01-.086-.2l-.001-.003-.006-.016c-.28-.683-.491-1.41-.628-2.165a1.034 1.034 0 00-.602-.753 1.097 1.097 0 00-.987.049c-.202.114-.41.221-.62.32a4.466 4.466 0 01-1.827.414z"
        fill="#51332A"
      />
      <Path
        d="M34.09 8.516zm-.001-1.025c-.556 0-1.024.415-1.061.957-.039.564.403 1.052.99 1.09l.395.03c.032.003.066.004.1.004.543 0 1.006-.398 1.058-.929.055-.563-.374-1.061-.958-1.115-.14-.013-.293-.025-.455-.036h-.07z"
        fill="#51332A"
      />
      <Path
        d="M33.992 61.763c-2.306.49-4.82.002-6.738-1.331-.783-.538-1.473-1.225-1.884-2.065-.406-.843-.501-1.843-.12-2.697.382-.85 1.284-1.498 2.244-1.485 1.357.015 2.351 1.21 3.023 2.346.576.965 1.145 2.047 2.092 2.638.143.363.301.717.465 1.076.019.044.044.09.061.136.235.495.52.958.857 1.382z"
        fill="#69564A"
      />
      <Path
        d="M33.992 61.763c-2.306.49-4.82.002-6.738-1.331-.783-.538-1.473-1.225-1.884-2.065-.406-.843-.501-1.843-.12-2.697.382-.85 1.284-1.498 2.244-1.485 1.357.015 2.351 1.21 3.023 2.346.576.965 1.145 2.047 2.092 2.638.143.363.301.717.465 1.076.019.044.044.09.061.136.235.495.52.958.857 1.382z"
        fill="#fff"
      />
      <Path
        d="M32.209 62.455c-1.876 0-3.75-.561-5.262-1.613-.946-.65-1.638-1.411-2.051-2.26-.5-1.04-.546-2.173-.129-3.112.478-1.06 1.584-1.79 2.699-1.79h.036c1.292.013 2.46.889 3.472 2.6.06.1.12.206.182.31.491.832.998 1.693 1.74 2.155l.143.09.061.155c.122.307.262.631.455 1.05l.008.02.02.04.036.08c.22.463.486.892.79 1.276l.501.63-.804.171a9.116 9.116 0 01-1.898.198zm-4.741-7.765c-.7 0-1.427.493-1.736 1.18-.297.664-.254 1.519.114 2.285.336.687.912 1.316 1.713 1.866 1.577 1.096 3.598 1.589 5.537 1.376a7.972 7.972 0 01-.44-.806l-.01-.025c-.005-.013-.012-.027-.02-.04l-.037-.083c-.169-.367-.3-.664-.412-.944-.872-.605-1.434-1.56-1.935-2.409-.062-.102-.122-.204-.181-.306-.815-1.38-1.68-2.083-2.574-2.092l-.019-.002z"
        fill="#51332A"
      />
      <Path
        d="M57.362 46.277c-1.597-2.516-3.817-4.613-6.414-6.176-2.03-1.222-4.74-3.075-5.642-4.723l-6.538 6.912-9.618 1.283c.903 1.65.957 4.847.855 7.151-.13 2.947.411 5.895 1.663 8.587l.055.115a6.79 6.79 0 005.186 3.796c4.996.703 8.93-1.025 10.738-2.044a27.25 27.25 0 012.227-1.132c1.878-.844 5.63-2.991 7.874-7.396 1.016-1.994.87-4.363-.319-6.266l-.067-.107z"
        fill="#69564A"
      />
      <Path
        d="M39.25 63.899c-.774 0-1.581-.052-2.418-.17a7.283 7.283 0 01-5.594-4.091c-.019-.04-.036-.08-.056-.12-1.253-2.695-1.844-5.744-1.709-8.817.143-3.246-.138-5.693-.792-6.89a.494.494 0 01-.004-.473.532.532 0 01.4-.274l9.428-1.258 6.408-6.774a.547.547 0 01.462-.164.533.533 0 01.403.27c.656 1.197 2.591 2.805 5.453 4.526 2.708 1.63 4.986 3.824 6.586 6.344.022.038.046.075.07.112 1.304 2.086 1.43 4.611.34 6.754-2.292 4.497-6.076 6.713-8.127 7.634-.706.316-1.421.68-2.184 1.11-1.626.92-4.706 2.28-8.665 2.28zm-9.334-19.91c.671 1.818.716 4.613.623 6.757-.13 2.915.428 5.805 1.615 8.355a6.226 6.226 0 004.832 3.614c4.794.674 8.57-.95 10.393-1.979a27.49 27.49 0 012.272-1.155c1.923-.863 5.474-2.942 7.622-7.156.93-1.828.82-3.988-.299-5.776-.021-.036-.043-.07-.065-.105-1.514-2.384-3.672-4.462-6.242-6.009-1.889-1.138-4.257-2.754-5.435-4.315l-6.068 6.415a.537.537 0 01-.32.162l-8.928 1.192z"
        fill="#51332A"
      />
      <Path
        d="M52.962 48.255c-1.652-2.407-4.667-6.214-9.088-9.578l-4.788 4.192-6.3 1.433c.382 5.413 1.938 9.96 3.064 12.634.868 2.057 2.943 3.426 5.25 3.384 3.502-.063 6.57-1.757 6.57-1.757s3.188-1.48 5.223-4.226c1.339-1.807 1.34-4.229.07-6.082z"
        fill="#fff"
      />
      <Path
        d="M41 60.826c-2.442 0-4.697-1.476-5.635-3.7-1.206-2.86-2.722-7.4-3.101-12.79l-.03-.428 6.6-1.502 5.017-4.391.349.266c4.403 3.35 7.433 7.122 9.2 9.696 1.394 2.033 1.362 4.708-.081 6.654-2.034 2.746-5.119 4.245-5.404 4.38-.276.15-3.304 1.752-6.807 1.815H41zm-7.656-16.132c.417 5.07 1.85 9.336 2.994 12.051.79 1.872 2.701 3.109 4.752 3.069 3.33-.06 6.29-1.674 6.32-1.69l.033-.018c.03-.014 3.093-1.46 5.023-4.063 1.19-1.609 1.216-3.823.058-5.51-1.676-2.444-4.52-5.993-8.627-9.192l-4.558 3.99-5.995 1.363z"
        fill="#51332A"
      />
      <Path
        d="M54.755 45.946c1.727 2.691 1.675 6.094 1.822 8.09a4.548 4.548 0 01-2.911 4.566c-2.202.892-4.76-.532-4.854-2.83-.045-1.07.436-2.265 2.09-3.347 0 0-1.178-6.468-4.018-11.755-.002.001 4.397-.138 7.871 5.276z"
        fill="#fff"
      />
      <Path
        d="M32.859 57.054c2.072 2.455 4.272 4.776 5.899 6.021 1.541 1.18 3.702 1.356 5.385.373l.172-.103c2.009-1.243 2.235-4.08.322-5.456-.892-.64-2.187-.934-4.049-.233 0 0-4.873-4.594-7.794-9.839"
        fill="#69564A"
      />
      <Path
        d="M47.31 15.305c-11.106-12.403-24.99-4.127-24.99-4.127s-14.94 6.345-10.6 22.18c0 0-1.16 8.237 6.878 11.724 2.453 1.064 5.178 1.393 7.852 1.108 3.12-.333 8.29-1.23 13.034-3.636 4.744-2.408 8.435-6.006 10.486-8.295 1.756-1.961 3.015-4.314 3.49-6.863 1.56-8.353-6.15-12.091-6.15-12.091z"
        fill="#fff"
      />
      <Path
        d="M50.118 17.332c-3.142 1.415-9.398 2.223-15.407-8.762 0 0-.064-.01-.184-.02a19.806 19.806 0 00-.708-.05 23.302 23.302 0 00-2.636.039c-1.761.143-3.357.5-4.695.904l-.125.04c-.393.12-.763.247-1.106.372a85.874 85.874 0 006.27 12.178c1.218 1.965 2.68 4.011 4.93 4.744 2.49.816 5.183-.206 7.813-.325 3.155-.147 6.333 1.144 8.491 3.353.31-.778.546-1.584.7-2.408.906-4.857-1.323-8.157-3.343-10.065zm-10.563 3.043c.72 1.318.194 2.945-1.172 3.637-1.368.694-3.055.19-3.776-1.127l-.382-.698c-1.06.522-2.361.124-2.917-.89-.561-1.027-.156-2.295.91-2.835a2.233 2.233 0 012.51.337 2.81 2.81 0 01.586-.396c1.365-.692 3.056-.19 3.777 1.128l.464.844zM18.599 45.08a14.1 14.1 0 002.458.806c-.67-2.962.02-6.216 1.93-8.64 1.59-2.02 3.988-3.58 4.697-6.021.644-2.2-.28-4.52-1.275-6.598a86.321 86.321 0 00-6.883-11.867c-.302.201-.62.424-.944.669l-.105.076c-1.103.834-2.31 1.9-3.43 3.217a21.65 21.65 0 00-1.525 2.072c-.163.258-.282.46-.358.59-.059.102-.087.158-.087.158 6.01 10.985 1.78 15.496-1.209 17.191.492 2.687 2.057 6.322 6.73 8.348zm1.387-15.856c-.72-1.319-.194-2.945 1.171-3.638.217-.11.442-.19.67-.242-.146-.862.284-1.755 1.131-2.184 1.065-.541 2.382-.146 2.943.88.554 1.014.16 2.273-.887 2.82l.382.697c.722 1.319.198 2.943-1.17 3.637-1.365.694-3.056.191-3.778-1.127l-.462-.843z"
        fill="#69564A"
      />
      <Path
        d="M24.63 46.8c-2.212 0-4.343-.424-6.252-1.25-4.338-1.883-6.063-5.118-6.746-7.5-.652-2.276-.503-4.188-.451-4.653-.99-3.665-1.04-7.135-.15-10.316.72-2.571 2.052-4.955 3.959-7.084 3.109-3.473 6.672-5.093 7.08-5.272.386-.225 3.79-2.138 8.521-2.643 2.9-.31 5.696-.02 8.306.864 3.227 1.091 6.172 3.093 8.75 5.952.429.223 2.151 1.186 3.73 2.99 1.656 1.89 3.45 5.09 2.607 9.6-.474 2.54-1.723 4.998-3.611 7.107-2.259 2.52-5.937 6.027-10.641 8.413s-9.787 3.325-13.223 3.693c-.63.066-1.259.1-1.88.1zm8.238-37.816c-.708 0-1.429.039-2.16.116-4.685.5-8.074 2.495-8.108 2.514l-.031.019-.034.014c-.037.016-3.689 1.598-6.766 5.047-4.093 4.592-5.282 10.154-3.534 16.534l.027.099-.015.1c-.002.02-.265 2.016.422 4.386.91 3.138 2.98 5.427 6.148 6.801 2.27.985 4.89 1.353 7.575 1.067 3.345-.357 8.287-1.268 12.845-3.58 4.557-2.313 8.132-5.722 10.329-8.177 1.765-1.97 2.93-4.26 3.37-6.62.616-3.293-.174-6.23-2.348-8.728-1.64-1.887-3.499-2.806-3.518-2.815l-.094-.045-.069-.077c-3.96-4.423-8.677-6.655-14.04-6.655z"
        fill="#51332A"
      />
      <Path
        d="M24.227 31.196c-1.367.693-3.06.189-3.779-1.128l-.463-.845c-.72-1.316-.195-2.945 1.171-3.639 1.368-.693 3.06-.188 3.78 1.128l.462.845c.72 1.317.195 2.945-1.17 3.64z"
        fill="#51332A"
      />
      <Path
        d="M23.974 27.113c1.203 0 2.178-.939 2.178-2.097s-.975-2.097-2.178-2.097c-1.203 0-2.178.939-2.178 2.097s.975 2.097 2.178 2.097z"
        fill="#fff"
      />
      <Path
        d="M38.385 24.014c1.367-.694 1.891-2.323 1.171-3.64l-.463-.843c-.719-1.317-2.412-1.822-3.778-1.128-1.366.693-1.89 2.322-1.172 3.64l.463.843c.72 1.317 2.41 1.821 3.779 1.128z"
        fill="#51332A"
      />
      <Path
        d="M33.234 22.416c1.203 0 2.178-.939 2.178-2.097 0-1.159-.975-2.098-2.178-2.098-1.203 0-2.178.94-2.178 2.098s.975 2.097 2.178 2.097z"
        fill="#fff"
      />
      <Path
        d="M31.306 27.605s-.3.097-.617.322a.964.964 0 00.134 1.652c.423.21.974.32 1.572.017.598-.304.816-.803.873-1.258.093-.707-.638-1.273-1.338-1.04-.37.124-.624.307-.624.307zM31.31 34.437a.535.535 0 01-.503-.339.509.509 0 01.321-.656c1.832-.635 1.717-1.992 1.715-2.006a.512.512 0 01.282-.503.55.55 0 01.59.06c.041.033 1.132.85 2.688-.228a.545.545 0 01.743.117c.172.23.117.55-.12.715-1.262.874-2.428.848-3.216.587-.223.774-.86 1.714-2.321 2.221a.518.518 0 01-.18.032z"
        fill="#51332A"
      />
      <Path
        d="M24.63 46.8c-2.212 0-4.343-.424-6.252-1.25-4.338-1.883-6.063-5.118-6.746-7.5-.652-2.276-.503-4.188-.451-4.653-.99-3.665-1.04-7.135-.15-10.316.72-2.571 2.052-4.955 3.959-7.084 3.109-3.473 6.672-5.093 7.08-5.272.386-.225 3.79-2.138 8.521-2.643 2.9-.31 5.696-.02 8.306.864 3.227 1.091 6.172 3.093 8.75 5.952.429.223 2.151 1.186 3.73 2.99 1.656 1.89 3.45 5.09 2.607 9.6-.474 2.54-1.723 4.998-3.611 7.107-2.259 2.52-5.937 6.027-10.641 8.413s-9.787 3.325-13.223 3.693c-.63.066-1.259.1-1.88.1zm8.238-37.816c-.708 0-1.429.039-2.16.116-4.685.5-8.074 2.495-8.108 2.514l-.031.019-.034.014c-.037.016-3.689 1.598-6.766 5.047-4.093 4.592-5.282 10.154-3.534 16.534l.027.099-.015.1c-.002.02-.265 2.016.422 4.386.91 3.138 2.98 5.427 6.148 6.801 2.27.985 4.89 1.353 7.575 1.067 3.345-.357 8.287-1.268 12.845-3.58 4.557-2.313 8.132-5.722 10.329-8.177 1.765-1.97 2.93-4.26 3.37-6.62.616-3.293-.174-6.23-2.348-8.728-1.64-1.887-3.499-2.806-3.518-2.815l-.094-.045-.069-.077c-3.96-4.423-8.677-6.655-14.04-6.655z"
        fill="#51332A"
      />
      <Path
        d="M18.583 13.43s-9.267.017-13.44 8.547c-.986 2.016-1.465 4.223-1.553 6.45-.125 3.16.329 7.75 3.804 8.947 1.234.425 2.6.272 3.78-.279 2.933-1.37 8.4-5.676 1.904-17.552 0 0 1.903-3.589 5.505-6.113zM26.36 9.484s5.257-7.35 14.922-5.84c2.283.358 4.445 1.225 6.401 2.415 2.778 1.687 6.453 4.644 5.513 8.08-.336 1.22-1.238 2.22-2.376 2.844-2.833 1.556-9.613 3.462-16.11-8.414.001 0-4.149-.518-8.35.915z"
        fill="#69564A"
      />
      <Path
        d="M8.882 38.127c-.576 0-1.141-.09-1.668-.272-1.712-.59-2.918-1.958-3.582-4.07-.464-1.475-.657-3.285-.575-5.378.099-2.434.638-4.67 1.604-6.649 2.23-4.558 5.892-6.72 8.572-7.731 2.898-1.093 5.25-1.11 5.348-1.11l1.64-.003-1.326.93c-2.947 2.065-4.737 4.89-5.217 5.704 2.794 5.193 3.628 9.53 2.478 12.898-.97 2.843-3.12 4.349-4.752 5.11-.81.379-1.679.571-2.522.571zm7.977-24.009c-.881.143-2.03.405-3.275.878-3.617 1.374-6.296 3.797-7.96 7.199-.906 1.852-1.411 3.955-1.502 6.25-.08 1.98.1 3.676.528 5.042.562 1.784 1.545 2.928 2.921 3.403 1.03.355 2.26.261 3.369-.256 1.447-.677 3.353-2.007 4.206-4.51 1.074-3.146.22-7.3-2.541-12.344l-.129-.235.126-.237c.07-.128 1.511-2.808 4.257-5.19zM46.473 18.656a9.03 9.03 0 01-2.454-.342c-3.534-.993-6.78-4.11-9.644-9.262-.97-.08-4.41-.253-7.835.916l-1.548.528.93-1.301c.058-.078 1.401-1.936 3.977-3.62C32.28 4.02 36.202 2.334 41.368 3.14c2.24.35 4.461 1.187 6.6 2.487 1.84 1.117 3.28 2.294 4.282 3.496 1.432 1.723 1.925 3.453 1.461 5.148-.35 1.283-1.308 2.435-2.626 3.158-1.123.616-2.715 1.227-4.612 1.227zM32.81 7.962c1.151 0 1.897.09 1.969.098l.273.034.129.236c2.759 5.044 5.833 8.071 9.135 8.998 2.626.737 4.844-.023 6.24-.79 1.072-.59 1.846-1.512 2.125-2.53.373-1.363-.052-2.791-1.263-4.245-.928-1.114-2.28-2.215-4.019-3.272-2.016-1.225-4.104-2.014-6.204-2.342-3.87-.605-7.468.16-10.7 2.271a16.412 16.412 0 00-2.573 2.084 22.007 22.007 0 014.888-.542zM52.282 59.383c-.77 0-1.537-.208-2.206-.619-1.092-.667-1.747-1.75-1.797-2.97-.058-1.378.626-2.586 2.035-3.596-.277-1.353-1.489-6.794-3.904-11.292a.503.503 0 01.228-.69.543.543 0 01.717.219c2.844 5.295 4.02 11.634 4.069 11.902.036.199-.051.399-.224.512-1.28.836-1.905 1.813-1.86 2.902.038.88.514 1.663 1.306 2.148a3.147 3.147 0 002.813.23c.059-.023.115-.048.172-.072a4.034 4.034 0 002.413-3.985c-.13-1.79-.769-4.625-1.798-7.98a.51.51 0 01.359-.638.538.538 0 01.662.347c.608 1.984 1.658 5.687 1.84 8.2.155 2.125-1.066 4.13-3.036 4.99a7.27 7.27 0 01-.2.083c-.51.208-1.05.31-1.59.31zM41.754 64.597a5.49 5.49 0 01-3.327-1.12c-2.047-1.568-4.625-4.495-5.98-6.1a.5.5 0 01.078-.721.547.547 0 01.748.074c2.291 2.716 4.358 4.828 5.817 5.943 1.387 1.06 3.307 1.196 4.778.336.054-.03.106-.063.159-.096a2.913 2.913 0 001.394-2.363 2.615 2.615 0 00-1.102-2.251c-.908-.652-2.097-.708-3.537-.166a.548.548 0 01-.566-.111c-.201-.19-4.966-4.709-7.892-9.963a.504.504 0 01.218-.694.54.54 0 01.72.21c2.487 4.466 6.461 8.501 7.464 9.486 1.661-.548 3.084-.408 4.23.416a3.61 3.61 0 011.53 3.108 3.93 3.93 0 01-1.883 3.19 5.276 5.276 0 01-2.849.822z"
        fill="#51332A"
      />
    </Svg>
  );
}

export default Sticker112D1013;