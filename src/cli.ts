#!/usr/bin/env node
import {
	$,
	cd,
	//  path
} from "zx";

const zOSRepo = "https://github.com/zer0-os/zOS.git"; // using https for no-auth directive

async function main() {
	// At this point, we are at the root based of the current zApp.
	// Let's build this zApp and prep it.
	await $`npm run build`;
	// Now that the zApp is built, we have a `dist` folder with the ready package.

	// Let's save the current directory just so that we know where we are.

	// const zAppDir = path.join((await $`pwd`).stdout.trim(), "dist");

	// Let's prepare zOS now.
	await $`mkdir _zOS`;
	cd("_zOS");
	await $`git clone ${zOSRepo}`;
	cd("zOS");
	await $`npm i`;
	await $`npm i ../../`;
	await $`npm run build`;
	// At this point, we should have zOS with the zApp ready.
  // Publish `_zOS/zOS/build/` folder.
}

main();
