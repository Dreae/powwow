import { Tag } from "powwow-js";
import * as Handlebars from "handlebars";
import * as template from "handlebars-loader!./templates/test.handlebars";

export class AppRoot extends Tag {
	static tagName = "AppRoot";
	template =  Handlebars.template(template);
} 