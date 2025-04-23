const Map = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-96 border-2 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.4656742791885!2d90.5098604!3d23.695059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6945b1428bd%3A0xe73f03598c8c0952!2z4Ka44KeB4Kau4KaoIOCmj-CmqOCnjeCmn-CmvuCmsOCmquCnjeCmsOCmvuCmh-CmnA!5e0!3m2!1sen!2sbd!4v1745402785921!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
