import { assertEquals } from "TEST/assert_equals.ts";
import { Replaceholder } from "./mod.ts";
Deno.test("Main", { permissions: "none" }, () => {
	assertEquals(new Replaceholder().handle("This is {{name}}, {{age}} years old, and likes to use \"\\{{replaceholder}}\"!", {
		age: "18",
		name: "Bob"
	}), "This is Bob, 18 years old, and likes to use \"{{replaceholder}}\"!");
});
