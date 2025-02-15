(summary)=

# Linear transformation

**Summary.** A linear transformation is a {doc}`dot product <matrix_multiplication>` between a linear operator $\boldsymbol{A}$ and a vector or matrix $\boldsymbol{x}$. The matrix $\boldsymbol{A}$ may induce scaling, rotation, reflection, or shearing.

:::{div}
:class: tags-box

**Tags:**
<span class="tag-pill">{doc}`Matrix Multiplication <matrix_multiplication>`</span>

:::

<!-- hidden-tag:linear algebra -->

## Definition

A linear transformation (also: *linear map* or *linear mapping*) is a {doc}`dot product <matrix_multiplication>` between an $i \times j$ matrix $\boldsymbol{A}\in\mathbb{R}^{i \times j}$ and either a column vector $\boldsymbol{x}^{j \times 1}$ (single sample) or a matrix $\boldsymbol{x}^{j \times N}$ ($N$ samples). This matrix multiplication can implement a number of operations, including *scaling*, *rotation*, *reflection*, or *shearing*.

## Intuition

The interactive element below illustrates the influence of different $2 \times 2$ matrices $\boldsymbol{A}$ on a $2 \times 100$ sample matrix $\boldsymbol{x}$. Observe that the transformation induced by this {doc}`dot product <matrix_multiplication>` is centered around the coordinate system's origin, here zero. You can adjust this pivot by subtracting the desired pivot coordinates (as defined in the original coordinate system) from $\boldsymbol{x}$. 

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/linear_transformation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Click an entry in the matrix, then adjust the slider to change the value in this entry. Observe how the resulting matrix transforms the matrix of 2D samples (grey) into a matrix of transformed samples (orange).
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $\boldsymbol{A}$ | linear operator |
| $\boldsymbol{x}$ | pre-transformation vector |
| $\boldsymbol{y}$ | post-transformation vector |
| $D$ | length of $\boldsymbol{x}$ |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
