# basic example

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 2 files in 1 group.</p>
<details>
  <summary>dist (2/2)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+10 (110)</td>
      </tr>
      <tr>
        <td nowrap>dist/foo.js</td>
        <td nowrap>+15 (115)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+25 (225)</td>
      </tr>
    </tfoot>
  </table>
</details>

# basic example + gzip + brotli

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 2 files in 1 group.</p>
<details>
  <summary>dist (2/2)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
        <th nowrap>gzip bytes</th>
        <th nowrap>brotli bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+10 (110)</td>
        <td nowrap>+2 (22)</td>
        <td nowrap>+1 (19)</td>
      </tr>
      <tr>
        <td nowrap>dist/foo.js</td>
        <td nowrap>+15 (115)</td>
        <td nowrap>+4 (24)</td>
        <td nowrap>+3 (21)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+25 (225)</td>
        <td nowrap>+6 (46)</td>
        <td nowrap>+4 (40)</td>
      </tr>
    </tfoot>
  </table>
</details>

# no changes

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will not impact files in any group.</p>
<details>
  <summary>dist (0/1)</summary>
  <p>No impact on files in dist group.</p>
</details>

# no files

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will not impact files in any group.</p>
<details>
  <summary>dist (0/0)</summary>
  <p>No file in dist group (see config below).</p>

```json
{
  "*/**": false
}
```

</details>

# changes cancels each other

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 2 files in 1 group.</p>
<details>
  <summary>dist (2/2)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/file-a.js</td>
        <td nowrap>+5 (15)</td>
      </tr>
      <tr>
        <td nowrap>dist/file-b.js</td>
        <td nowrap>-5 (10)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>0 (25)</td>
      </tr>
    </tfoot>
  </table>
</details>

# two groups + gzip + brotli

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 6 files in 2 groups.</p>
<details>
  <summary>dist/commonjs (3/3)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
        <th nowrap>gzip bytes</th>
        <th nowrap>brotli bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap><del>dist/commonjs/bar.js</del></td>
        <td nowrap>-100 (0)</td>
        <td nowrap>-10 (0)</td>
        <td nowrap>-9 (0)</td>
      </tr>
      <tr>
        <td nowrap>dist/commonjs/foo.js[new]</td>
        <td nowrap>+120 (120)</td>
        <td nowrap>+12 (12)</td>
        <td nowrap>+11 (11)</td>
      </tr>
      <tr>
        <td nowrap>dist/commonjs/hello.js</td>
        <td nowrap>+20,000 (187,000)</td>
        <td nowrap>+200 (1,800)</td>
        <td nowrap>+200 (1,700)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+20,020 (187,120)</td>
        <td nowrap>+202 (1,812)</td>
        <td nowrap>+202 (1,711)</td>
      </tr>
    </tfoot>
  </table>
</details>

<details>
  <summary>dist/systemjs (3/3)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
        <th nowrap>gzip bytes</th>
        <th nowrap>brotli bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap><del>dist/systemjs/bar.js</del></td>
        <td nowrap>-100 (0)</td>
        <td nowrap>-10 (0)</td>
        <td nowrap>-9 (0)</td>
      </tr>
      <tr>
        <td nowrap>dist/systemjs/foo.js[new]</td>
        <td nowrap>+120 (120)</td>
        <td nowrap>+12 (12)</td>
        <td nowrap>+11 (11)</td>
      </tr>
      <tr>
        <td nowrap>dist/systemjs/hello.js</td>
        <td nowrap>+20,000 (187,000)</td>
        <td nowrap>+200 (1,800)</td>
        <td nowrap>+200 (1,700)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+20,020 (187,120)</td>
        <td nowrap>+202 (1,812)</td>
        <td nowrap>+202 (1,711)</td>
      </tr>
    </tfoot>
  </table>
</details>

# zero size impact

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 1 file in 1 group.</p>
<details>
  <summary>dist (1/2)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+15 (315)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+15 (315)</td>
      </tr>
    </tfoot>
  </table>
</details>

# zero size impact and cacheImpact enabled

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 2 files in 1 group.</p>
<details>
  <summary>dist (2/2)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+15 (315)</td>
      </tr>
      <tr>
        <td nowrap>dist/foo.js</td>
        <td nowrap>0 (2,500)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+15 (2,815)</td>
      </tr>
    </tfoot>
  </table>
</details>

# cache impact + several cache impact

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 3 files in 1 group.</p>
<details>
  <summary>dist (3/3)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+10 (110)</td>
      </tr>
      <tr>
        <td nowrap>dist/foo.js[new]</td>
        <td nowrap>+100 (100)</td>
      </tr>
      <tr>
        <td nowrap>dist/hello.js</td>
        <td nowrap>+10 (110)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+120 (320)</td>
      </tr>
    </tfoot>
  </table>
</details>

# size impact 0/1

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will not impact files in any group.</p>
<details>
  <summary>dist (0/1)</summary>
  <details>
  <summary>Hidden (1)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+1 (101)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+1 (101)</td>
      </tr>
    </tfoot>
  </table>
  </details>
</details>

# size impact 1/2

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 1 file in 1 group.</p>
<details>
  <summary>dist (1/2)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/foo.js</td>
        <td nowrap>+14 (115)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+14 (115)</td>
      </tr>
    </tfoot>
  </table>
  <details>
  <summary>Hidden (1)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/bar.js</td>
        <td nowrap>+1 (101)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+1 (101)</td>
      </tr>
    </tfoot>
  </table>
  </details>
</details>

# formating file relative url

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 1 file in 1 group.</p>
<details>
  <summary>dist (1/1)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>foo.js</td>
        <td nowrap>+14 (115)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+14 (115)</td>
      </tr>
    </tfoot>
  </table>
</details>

# empty warning

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

---

**Warning:** Nothing is tracked. It happens when tracking config is an empty object.

---

<p>Merging head into base will not impact files in any group.</p>

# new file + showSizeImpact

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 1 file in 1 group.</p>
<details>
  <summary>dist (1/1)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap>dist/foo.js[new]</td>
        <td nowrap>+110 (110)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>+110 (110)</td>
      </tr>
    </tfoot>
  </table>
</details>

# deleted file + showSizeImpact

<!-- Generated by @jsenv/file-size-impact -->
<h4 id="file-size-impact">File size impact</h4>

<p>Merging head into base will impact 1 file in 1 group.</p>
<details>
  <summary>dist (1/1)</summary>
  <table>
    <thead>
      <tr>
        <th nowrap>File</th>
        <th nowrap>raw bytes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td nowrap><del>dist/foo.js</del></td>
        <td nowrap>-110 (0)</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td nowrap><strong>Total size impact</strong></td>
        <td nowrap>-110 (0)</td>
      </tr>
    </tfoot>
  </table>
</details>
