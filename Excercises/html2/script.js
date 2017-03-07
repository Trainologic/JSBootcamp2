(function ($) {

    var fs = [{
        id: 0,
        name: 'root',
        children: [{
            id: 1,
            name: 'sub1',
            children: [{
                id: 2,
                name: 'file1',
                content: 'text'
            }, {
                id: 5,
                name: 'sub5',
                children: [{
                    id: 6,
                    name: 'file3',
                    content: 'text'
                }]
            }]
        }, {
            id: 3,
            name: 'sub2',
            children: [{
                id: 4,
                name: 'file2',
                content: 'text'
            }]
        }]
    }];

    $(document).ready(function () {
        init();
    });

    function init() {
        initBrowser();
    }

    function initBrowser() {
        createFsUl(fs, $('div#folderList'));
        attachEventListeners();
    }

    function createFsUl(items, parentElem) {
        if (items) {
            var liList = [];
            var ul = $('<ul></ul>');
            for (var item of items) {
                if (!item.content) {
                    var li = $('<li data-collapse="collapsed"><a data-id="' + item.id + '" href="#">' + item.name + '</a></li>');
                    createFsUl(item.children, li);
                    liList.push(li);
                }
            }
            liList.forEach(function (_li) {
                ul.append(_li);
            });
            parentElem.append(ul);
        }
    }

    function attachEventListeners() {
        $('[data-collapse]').each(function () {
            $(this).off('click');
            $(this).on('click', function (e) {
                switchCollapseState.call(this, e);
            });
        });
        $('[data-id]').each(function () {
            $(this).off('click');
            $(this).on('click', function (e) {
                openContentById.call(this, e);
            });
        });
    }

    function switchCollapseState(e) {
        e.stopPropagation();
        var collapseState = $(this).attr('data-collapse');
        $(this).attr('data-collapse', collapseState == '' ? 'collapsed' : '');
    }

    function openContentById(e) {
        var items = findItemById($(this).data('id'), fs);
        showInMainContent(items);
    }

    function showInMainContent(items) {
        $('#main').html('');
        for (var item of items) {
            var _item = $('<div>' + item.name + '</div>');
            if (item.content)
                $(_item).addClass('file');
            else
                $(_item).addClass('folder');
            $('#main').append(_item);
        }
    }

    function findItemById(id, items) {
        if (items) {
            for (var item of items) {
                if (item.id == id) {
                    return item.children;
                }
                var results = findItemById(id, item.children);
                if (results) {
                    return results;
                }
            }
        }
    }

})(jQuery);