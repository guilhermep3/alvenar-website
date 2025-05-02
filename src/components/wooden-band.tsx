type props = {
   height: any;
   topOrBottom: 'top' | 'bottom';
}
export const WoodenBand = ({ height, topOrBottom }: props) => {

   return (
      <div
         className={`absolute left-0 right-0 bg-center bg-fixed
            ${topOrBottom === 'top' && 'top-0'}
            ${topOrBottom === 'bottom' && 'bottom-0'} `}
         style={{
            background: 'url("/wood1.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            height: height
         }}>
      </div>
   )
}