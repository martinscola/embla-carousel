"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5223],{5223:function(e,n,t){t.r(n),n.default="import React from 'react';\nimport useEmblaCarousel from 'embla-carousel-react';\nimport ClassNames from 'embla-carousel-class-names';\nimport { NextButton, PrevButton, usePrevNextButtons } from '../EmblaCarouselArrowButtons';\nimport { DotButton, useDotButton } from '../EmblaCarouselDotButton';\nimport { sandboxImages } from 'components/Sandbox/sandboxImages';\n\nconst EmblaCarousel = (props) => {\n    const { slides, options } = props;\n    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);\n    \n    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);\n    \n    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);\n    \n    return (<div className=\"embla\">\n      <div className=\"embla__viewport\" ref={emblaRef}>\n        <div className=\"embla__container\">\n          {slides.map((index) => (<div className=\"embla__slide\" key={index}>\n              <img className=\"embla__slide__img\" src={sandboxImages(index)} alt=\"Your alt text\"/>\n            </div>))}\n        </div>\n      </div>\n \n      <div className=\"embla__controls\">\n        <div className=\"embla__buttons\">\n          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>\n          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>\n        </div>\n \n        <div className=\"embla__dots\">\n          {scrollSnaps.map((_, index) => (<DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}/>))}\n        </div>\n      </div>\n    </div>);\n};\n\nexport default EmblaCarousel;\n"}}]);
//# sourceMappingURL=5223-50005a3ac0f6f5b22cfc.js.map