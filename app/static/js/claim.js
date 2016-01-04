jQuery(document).ready(
    function()
    {
        var notification = $('.js-notification');

        function s4()
        {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        jQuery('a.gen-claim-btn').click(
            function()
            {
                jQuery('input[name=claim]').val(s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4());

                return false;
            }
        );

        jQuery('form.badge-form').submit(
            function()
            {
                var errMsg = '';

                notification.empty();

                if (jQuery.trim(jQuery('input[name=claim]').val()).length === 0) {
                    errMsg = 'The Claim Code is required';
                } else if (jQuery.trim(jQuery('input[name=email]').val()).length === 0) {
                    errMsg = 'The Recipient Email is required';
                }

                if (errMsg) {
                    notification.append('<p>' + errMsg + '</p>');
                }

                return (errMsg === '');
            }
        )
    }
);
