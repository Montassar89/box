import React from 'react';

const Footer = () => (
  <footer className="boxful-footer-wrap block w-full">
    <div className="footer-main-wrap  flex md:flex-col flex-col items-center pb-8 bg-grey-50 space-y-6">
      <div className="footer-link-wrap flex justify-center mt-8">
        <div className="flink my-0 mx-1 md:mx-4 font-bold text-black">
          <a href="/about-us">About Us</a>
        </div>
        <div className="flink my-0 mx-1 md:mx-4 font-bold text-black  hidden md:block">
          <a href="/affiliate">Affiliate</a>
        </div>
        <div className="flink my-0 mx-1 md:mx-4 font-bold text-black hidden md:block">
          <a href="/blog/en">Blog</a>
        </div>
        <div className="flink my-0 mx-1 md:mx-4 font-bold text-black">
          <a href="/faq">FAQ</a>
        </div>
        <div className="flink my-0 mx-1 md:mx-4 font-bold text-black">
          <a href="/privacy">Privacy</a>
        </div>
        <div className="flink my-0 mx-1 md:mx-4 font-bold text-black">
          <a href="/terms">Terms &amp; Conditions</a>
        </div>
      </div>
      <div className="footer-sep-line" />
      <div className="foot-logo-wrap mt-4">
        <div className="w-50 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={90}
            viewBox="0 0 43 44"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
              fill="#667EEA"
            />
          </svg>
          <p className="text-6xl text-gray-800 ml-3 font-extrabold">BOXFUL</p>
        </div>
      </div>
      <div className="flex-col">
        <h2 className="footer-logo-desc text-center font-black text-lg md:m-0 mt-4">
          Self-Storage Lockers and
        </h2>
        <h2 className="footer-logo-desc text-center font-black text-lg md:m-0 mt-4">
          Door-to-Door Storage Services
        </h2>
      </div>

      <div className="flex-col items-center justify-center">
        <p className="text-gray-500 text-center">
          Unit 2202-2203, 299QRC, 287-299 Queen’s Road Central,Sheung Wan,
          Hong Kong
        </p>
        <p className="flex-col md:flex-row flex items-center justify-center text-center">
          <strong className="mr-1">Customer Service</strong>
          <span className="text-gray-500">
            {' '}
            Monday to Sunday, 9am to 7pm, closed during public holidays
          </span>
        </p>
        <p className="flex-col md:flex-row flex items-center justify-center text-center">
          <strong className="mr-1">Delivery Hours</strong>
          <span className="text-gray-500">
            {' '}
            Monday to Sunday, 9am to 9pm, closed during public holidays
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <img
          width="48"
          src="data:image/webp;base64,UklGRiQEAABXRUJQVlA4TBgEAAAvY8AYEB/nIJIkRUr/Ok4iw//Ezi1JYBRJkqJc/wbXAR/fc0FRI0lR7XLDEyv4twbjSLKV4O6uZyIgFHL/YWCnp4rctm2S7hPdZ8Ba7qdwkcBGAR87ergIMcFGBRcNIjTwcCCGDQeRLYyZ75kO/L5xC99c+XhX2ef7jv/Kp4yRGCPv9+24xnu9zzD3sej3tyB2WDHSslnQiYZAIBBov8EVBpqY8l4xklUbwEXwQVJWW0ApbnyfpOetGQAoqDHkWsINkhVSo61iVNqkJalSJaLzG3UQKChq223abr4d1U5ttyO2bdu2U7dB3di2bdu2bd5Jzxhjjj69gET034EjSU4zTcYrmrT4DTyJkJdfzzi89hwO/4iixE0OGQM8buxet2D+6r3XcHk8oYYWnBYZsj310pvOwrMYHlTQor/CMm3QEsPRIQ3yiqbBn+exjBFDf2LkeD63ySsY1hvRYzBKG/ykhc59Iz4HMVwrJoZqwUD2999SyY2ht/bsCPTTClMB2F42Mea7h2GaOFwMD7M+f0cNObXG5QJaczVQXytsBNhbJDFKPQyPaorDunBOy1cfZOVprTFVW1Z5CPfza4czwL06qVF6Y1jjygwLhzoiH/2bF7RFQ205DjjsVs4x9jUnbd6zbdHfjWUkhg5uOsYzWEQ+zmReBWCflix4iVRlF+3Q4jaagwcAvAtQV1+GR+GsFRH5MPMGAAO16neQqiyvHaaQZoDyqTxDex0J50Y+Efn63Uwu4G4p7biHZKV5LxpdI8XVospnqLnu88KhrYjIF28/AyzWik0hWVnbbt5Egkla5/j9wuoAA+IZrbQ+eRHo6F4Gv5JBJiKd9uDxsJpyaQOtlEDjePaIZG16D07nUQpl7pCs5LT7WvY4gWWVNpkNv+uOcCuch6WV16f2SspfQLpLLvUihWZhaK88il6HJVppRzj0UVpffvaouhLIcwpId0lWFHMXxgNgPwjfAye1wuR4ZmqvZVvMPQDSXRI40c0d9MF+1hJbAMophb7xnNKKQ77VB9hAutKwtaWTJgBX9ENc/TFAd+VQKR50O22un6dajwhUOk2xmoinM0Er5C+VRUEtcS6egeIyFRKVCa63NXbb4UEVibAqnlWuXJGrAImPr89OL8slxJB4ruUTh18gUHkAh9XeSttY2sVDa3HYT6DyurScdcHMK5leBvslRrGH8Yxy3FpDulI3oLo9fxjcv6EYJsKP2qDZb4bO2uNQPLucLIZA5VxJU/cOlwu5LyXAbu0xK54HJY10+XtEKv9Ij+WOwFitUNX5HN4toJ+jeOhlrEdgWOlWdk2OjU/A/YraYTgOzfU/vv+Q7aM0zqu7Rd/cBQB9E0vVp98HzhjRM+6bp0TG8H9xduHADtWKi5Ss0WP0jkc8oREA"
        />
        <img
          width="48"
          src="data:image/webp;base64,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"
        />
        <img
          width="48"
          src="data:image/webp;base64,UklGRnwEAABXRUJQVlA4THAEAAAvY8AYEBrJtm2btvM9NmZs20nJVs3W/PH7sNeZ69SiFRed3VKyuWODQds2goNIcne/n+UIEkCA0WttGxPbyVml0V1l7rMkARBAgIlt27Zt27Zt21v1sm3btm3btnkQ3EhSJDmUC3fXx/yEOJ0TyAA3AVUD356ADaARmIdvIDeLAicvASHHAWHwQiVncBl4+QG2WRj4D4aBsBeQqpQz2AQknYABrQz2ADEfYI1YBgt8XFPLoMBjQAT8lgOfgLqDH1kfmOUAJDh4BXT0QLeD/EwPLPUAbuuB8x4yMFDvCfjuAuSqAUOXZTBGDUT7ACvUQKsPsEXtfrYFW5gb/g1ZDZw03erfVVpmmKYZwN6Xrp1jYNfJOYMdauCzZT27yKWKfenbFfIo9osHdC0bsMml6rXOKKN387gYCLV4K3Bp6bv7xBrDEpQCDRatM4LClvvmHwvWJKmLFpcUHe0XpbCalcBhy8tSrGumKKWw/rDchcB7g4FdR2Hat09DYV1gCckG1Cz3e3cZhW33PYMKK1cGBFh0/bMI1j5jlDLkSgZUW7TOGAJzvlOGKiw7FTDZ5WTzDHGknwzD6lIB+11OTv12GbbC2qICXnqc/HK4HwzHeiQaULDcv17dwnfN8BXWDxHg7fFdsndmONV/RlBEQIlF2z9O5TO7zxeKHBhv0TSDVLX6vmLEsT6JgJ36k/PeOaWUon4S8NhgYDeouOnfASOvsPZoBmTkJ2d+RyRWWFM1gKtF985T5VbzDLLiPSK1wsrRAPkW7f8EVb4Db7vvSK6wdDTAOIt79k36cKxfpMe6FprAZuHJvplj1/1MMfREBNyTnRw1y2y97yiWWH9ZBpoBCfDPoG9XsXyG9c4sC98VB/tGscVaGZqAg/Fk+4zTORMMq2sm6ZkZMEtM+rb5v/m+5kR/KeZYjiIgy6Ljn2TKt8O1ooq1ULQAQxbTvgOKLNYnlroKWG/YKNt80GFlqRbgusHEPUQ31gLZgCj4YzD7v0I21iGWmAywzoZWfS9Q7TZLQbYAyRZb3wdEYx1jyesWoM/i6PmFZqzFLCnhAqy0nJTcYn1mlYU0cNFgwh6gGGsDS1f8r17w02DWf0n1W6wdLI8QB0yzoeXzlIoPYV1lDbAMQx6Is9j83lMssd6wHn5j3WVdYB1krWYNsTJYmuER6LA4dL6TfgjrP2sqy7TxFnkGFitOsn6zEsI7cMZg/O6TxuoJ74Ag+Gow4z8nOdYHllR4BwyyoaXzhCTW2nAPRFhseG9JYnWHe6DJYv/5SpL/UweYb9goKMlYFo2ndQ4cMxi3e6SfK0sk3AMfDabvGUmsy+FfNrR4HpLEWhP+gfsGm967r0msgajhMXDlVP8/JrFSwz8gnPw799XSeepZkrHsog4BY5AJCkYK+AEhVlD67wGWWNQwVl0S61bUMda0JNbGqGOsg0ms0ahjrNemv5ZrF0upJGM5RQ1j2ad/hWj8YKxfLAXWnxTW9ahlrFkprPyoZb9Y41kfRrrFesaqjNNSBQ=="
        />
      </div>
    </div>
  </footer>
);

export default Footer;
