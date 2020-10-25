<script type="module">

import define from "./radial-tidy-tree/index.js";
import {Runtime, Library, Inspector} from "./radial-tidy-tree/runtime.js";

const runtime = new Runtime();
const main = runtime.module(define, Inspector.into(document.getElementById("v1")));

</script>