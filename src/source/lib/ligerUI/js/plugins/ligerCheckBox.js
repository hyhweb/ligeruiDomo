﻿/**
* jQuery ligerUI 1.3.2
* 
* http://ligerui.com
*  
* Author daomi 2015 [ gd_star@163.com ] 
* 
*/
(function ($)
{
    $.fn.ligerCheckBox = function (options)
    {
        return $.ligerui.run.call(this, "ligerCheckBox", arguments);
    };
    $.fn.ligerGetCheckBoxManager = function ()
    {
        return $.ligerui.run.call(this, "ligerGetCheckBoxManager", arguments);
    };
    $.ligerDefaults.CheckBox = {
        disabled: false,
        readonly : false //只读
    };

    $.ligerMethos.CheckBox = {};

    $.ligerui.controls.CheckBox = function (element, options)
    {
        $.ligerui.controls.CheckBox.base.constructor.call(this, element, options);
    };
    $.ligerui.controls.CheckBox.ligerExtend($.ligerui.controls.Input, {
        __getType: function ()
        {
            return 'CheckBox';
        },
        __idPrev: function ()
        {
            return 'CheckBox';
        },
        _extendMethods: function ()
        {
            return $.ligerMethos.CheckBox;
        },
        _render: function ()
        {
            var g = this, p = this.options;
            g.input = $(g.element);
            g.link = $('<a class="l-checkbox"></a>');
            g.wrapper = g.input.addClass('l-hidden').wrap('<div class="l-checkbox-wrapper"></div>').parent();
            g.wrapper.prepend(g.link);
            g.link.click(function ()
            {
                if (g.input.attr('disabled') || g.input.attr('readonly')) { return false; }
                if (p.disabled || p.readonly) return false;
                if (g.trigger('beforeClick', [g.element]) == false) return false; 
                if ($(this).hasClass("l-checkbox-checked"))
                {
                    g._setChecked(false);
                }
                else
                {
                    g._setChecked(true);
                }
                g.input.trigger("change");
            });
            g.wrapper.hover(function ()
            {
                if (!p.disabled)
                    $(this).addClass("l-over");
            }, function ()
            {
                $(this).removeClass("l-over");
            });
            this.set(p);
            this.updateStyle();

            if(g.input.attr('checked')){
                g.wrapper.addClass("l-over");
                g.link.addClass("l-checkbox-checked");
            }else{
                g.wrapper.removeClass("l-over");
                g.link.removeClass("l-checkbox-checked");
            }
        },
        _setCss: function (value)
        {
            this.wrapper.css(value);
        },
        _setChecked:function (value) {
            var g = this, p = this.options;
            if (!value)
            {
                g.input[0].checked = false;
                g.link.removeClass('l-checkbox-checked');
            }
            else
            {
                g.input[0].checked = true;
                g.link.addClass('l-checkbox-checked');
            }
        },
        _setValue: function (value)
        {
           /* var g = this, p = this.options;
            if (!value)
            {
                g.input[0].checked = false;
                g.link.removeClass('l-checkbox-checked');
            }
            else
            {
                g.input[0].checked = true;
                g.link.addClass('l-checkbox-checked');
            }*/
        },
        _setDisabled: function (value)
        {
            if (value)
            {
                this.input.attr('disabled', true);
                this.wrapper.addClass("l-disabled");
            }
            else
            {
                this.input.attr('disabled', false);
                this.wrapper.removeClass("l-disabled");
            }
        },
        _getChecked:function () {
            return this.element.checked;
        },
        _getValue: function ()
        {
           // return this.element.value;
        },
        updateStyle: function ()
        {
            if (this.input.attr('disabled'))
            {
                this.wrapper.addClass("l-disabled");
                this.options.disabled = true;
            }
            if (this.input[0].checked)
            {
                this.link.addClass('l-checkbox-checked');
            }
            else
            {
                this.link.removeClass('l-checkbox-checked');
            }
        }
    });
})(jQuery);