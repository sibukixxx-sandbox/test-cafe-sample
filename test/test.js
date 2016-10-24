const assert = require("assert");
import {Selector} from 'testcafe';
const getElementById = Selector(id => document.querySelector(`#${id}`));
fixture('Example page')
    .page('http://www.sibukixxx.net/');

test('Type the developer name, obtain the header text and check it', async t => {
    await t
        .typeText('#UserUsername', 'hoge@example.com')
        .click('#submit-button');

    const articleHeader = await getElementById('article-header');
    const headerText = articleHeader.innerText;

    assert.equal(headerText, 'Thank you, John!');
});
