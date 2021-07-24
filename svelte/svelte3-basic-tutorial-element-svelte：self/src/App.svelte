<script lang="ts">
  import type { File } from "./Folder.svelte";
  import Folder from "./Folder.svelte";

  let files: Array<File> = [
    {
      name: "a",
      files: [
        {
          name: "aa",
          files: [
            {
              name: "aaa",
            },
          ],
        },
      ],
    },
    {
      name: "b",
    },
  ];
</script>

<div>
  <h1>App</h1>
  <Folder {files} />
</div>

<style>
</style>
