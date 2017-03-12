import { testInstance } from './modules/test.js';
import { testInstance as te2 }  from './modules/test.js';
import * as $ from 'jquery';

$('.test').html(testInstance.getName());
$('.test2').html(te2.getName());