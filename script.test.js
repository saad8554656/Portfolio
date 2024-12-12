import { JSDOM } from 'jsdom';
import $ from 'jquery';
import 'jest-jquery';

jest.mock('isotope-layout', () => {
  return jest.fn().mockImplementation(() => {
    return {
      isotope: jest.fn(),
    };
  });
});

describe('Project Skills Filtering', () => {
  let dom;
  
  beforeEach(() => {
    dom = new JSDOM(`
      <ul class="filter-button-group">
        <li data-filter="*">All</li>
        <li data-filter=".category1">Category 1</li>
      </ul>
      <div class="grid">
        <div class="menu-item category1"></div>
        <div class="menu-item category2"></div>
      </div>
    `);
    global.document = dom.window.document;
    global.window = dom.window;
    global.$ = $(dom.window);
  });
});
