import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import _ from 'lodash';
import Pace from 'pace-js';
import inView from 'in-view';

let context;

export class ProductCardColorSwatches {
    constructor($scope) {
        this.$scope = $scope;
        this.productId = $scope.data('product-id');
        this.$content = $scope.find('[data-product-card-options-content]');
        this.$cardImg = $scope.find('.card-image').first();
        this.$cardFigure = $scope.find('.figure-content');

        this.$cardImg.on('load', () => {
            this.$cardFigure.removeClass('loading');
        });

        // Request in-stock attributes
        Pace.ignore(() => {
            utils.api.productAttributes.optionChange(this.productId, $.param({ action: 'add', product_id: this.productId }), 'products/card-options', (err, response) => {
                
                const attributesData = response.data || {};

                if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
                    // Request swatches template
                    Pace.ignore(() => {
                        utils.api.product.getById(this.productId, { template: 'products/card-options' }, (err2, resp) => {
                            this.$content.html(resp);

                            // Delete out-of-stock attributes
                            this.$content.find('[data-product-option-value]').each((i, a) => {
                                const attrId = $(a).data('product-option-value');
                                if (typeof attributesData.in_stock_attributes === 'object' && attributesData.in_stock_attributes.indexOf(attrId) === -1) {
                                    $(a).remove();
                                }
                            });
                            this.$content.addClass('loaded');
                            this.$content.removeClass('loading');
                            $('.card-swatch-body .card-text.card-text--colorswatches').each(function(){
                                $(this).find(".option_section .options_slide").each(function(){
                                    if ($(this).index() > 4) {
                                        $(this).hide();
                                    }
                                });
                                var timer;
                                var li_options_slide = 0;
                                function hide_swatches(li_prdct_lngth){
                                    if(li_prdct_lngth > 0)
                                    {
                                        clearInterval(timer);
                                        $("li.product").each(function(){
                                            // console.log($(this).find(".card-title a").text());
                                            var swatch_identify = '';
                                            $(this).find("article .card-swatch-body .card-text--colorswatches").first().find("ul.option_section li.options_slide").each(function(index){
                                                // console.log(index);        
                                                if(index == 0)
                                                {
                                                    if($(this).find(".productCard-colorSwatch span").length !== 0)
                                                    {
                                                        swatch_identify = "color";
                                                    }
                                                    else if($(this).find(".productCard-colorSwatch img").length !== 0)
                                                    {
                                                        swatch_identify = "pattern";
                                                    }
                                                    else if($(this).find("input.form-radio").length !== 0)
                                                    {
                                                        swatch_identify = "size";
                                                    }
                                                }
                                                if($(this).find(".productCard-colorSwatch span").length !== 0)
                                                {
                                                       if(swatch_identify != "color")
                                                       {
                                                            $(this).css('display','none');
                                                       }
                                                }
                                                else if($(this).find(".productCard-colorSwatch img").length !== 0)
                                                {
                                                       if(swatch_identify != "pattern")
                                                       {
                                                            $(this).css('display','none');
                                                       }
                                                }
                                                else if($(this).find("input.form-radio").length !== 0)
                                                {
                                                       if(swatch_identify != "size")
                                                       {
                                                            $(this).css('display','none');
                                                       }
                                                }
                                            });
                                        });
                                    }
                                }
                                timer = setInterval(function(){
                                    li_options_slide = $('li.options_slide').length;
                                    // console.log("Li_Length: "+li_options_slide);
                                    hide_swatches(li_options_slide);
                                },3000);
                            });
                        });
                    });
                } else {
                    this.$content.addClass('loaded');
                    this.$content.removeClass('loading');
                    $('.card-swatch-body .card-text.card-text--colorswatches').each(function(){
                        $(this).find(".option_section .options_slide").each(function(){
                            if ($(this).index() > 4) {
                                $(this).hide();
                            }
                        });
                        var timer;
                        var li_options_slide = 0;
                        function hide_swatches(li_prdct_lngth){
                            if(li_prdct_lngth > 0)
                            {
                                clearInterval(timer);
                                $("li.product").each(function(){
                                    // console.log($(this).find(".card-title a").text());
                                    var swatch_identify = '';
                                    $(this).find("article .card-swatch-body .card-text--colorswatches").first().find("ul.option_section li.options_slide").each(function(index){
                                        // console.log(index);        
                                        if(index == 0)
                                        {
                                            if($(this).find(".productCard-colorSwatch span").length !== 0)
                                            {
                                                swatch_identify = "color";
                                            }
                                            else if($(this).find(".productCard-colorSwatch img").length !== 0)
                                            {
                                                swatch_identify = "pattern";
                                            }
                                            else if($(this).find("input.form-radio").length !== 0)
                                            {
                                                swatch_identify = "size";
                                            }
                                        }
                                        if($(this).find(".productCard-colorSwatch span").length !== 0)
                                        {
                                               if(swatch_identify != "color")
                                               {
                                                    $(this).css('display','none');
                                               }
                                        }
                                        else if($(this).find(".productCard-colorSwatch img").length !== 0)
                                        {
                                               if(swatch_identify != "pattern")
                                               {
                                                    $(this).css('display','none');
                                               }
                                        }
                                        else if($(this).find("input.form-radio").length !== 0)
                                        {
                                               if(swatch_identify != "size")
                                               {
                                                    $(this).css('display','none');
                                               }
                                        }
                                    });
                                });
                            }
                        }
                        timer = setInterval(function(){
                            li_options_slide = $('li.options_slide').length;
                            // console.log("Li_Length: "+li_options_slide);
                            hide_swatches(li_options_slide);
                        },3000);
                    });
                }
            });
        });

        $scope.on('click', '[data-product-option-id]', (event) => {
            event.preventDefault();

    const $a = $(event.currentTarget);
    const id = $a.data('product-option-id');
    const val = $a.data('product-option-value');
    const attribute = {};
    attribute[id] = val;

    this.$scope.find('[data-product-attribute-id]').each((i, span) => {
        attribute[$(span).data('product-attribute-id')] = $(span).data('product-attribute-value');
    });

    this.$cardFigure.addClass('loading');
    utils.api.productAttributes.optionChange(this.productId, $.param({ action: 'add', product_id: this.productId, attribute }), 'products/card-options', (err, response) => {
        const attributesData = response.data || {};
        if (attributesData.image) {
            //const img = attributesData.image.data.replace('{:size}', context.theme_settings.productgallery_size);
            const img = attributesData.image.data.replace('{:size}', "500x659");
            this.$cardImg.attr('src', img);
        } else {
            this.$cardFigure.removeClass('loading');
        }
    });
});
}
}

function check() {
    $('[data-product-card-options]').each((i, el) => {
        if (!$(el).data('product-card-colorswatches-instance') && inView.is(el)) {
            $(el).data('product-card-colorswatches-instance', new ProductCardColorSwatches($(el)));
        }
    });
}

export function inViewCheck(localContext, eventEl = window) {
    if (localContext) {
        context = localContext;
    }

    if (!context) {
        return;
    }

    const $eventEl = $(eventEl);

    inView.offset(-200);

    if ($eventEl.data('productCardColorswatchesInViewCheckEvent')) {
        return;
    }

    check();

    const callback = _.debounce(check, 250);
    $eventEl.on('scroll resize load', callback);
    $eventEl.data('productCardColorswatchesInViewCheckEvent', callback);
}
