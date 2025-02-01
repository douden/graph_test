```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}$ | matrices or vectors |
| $\cdot$ | matrix multiplication |
```

# Matrix multiplication

**Summary.** A matrix multiplication combines a $i \times j$ matrix $\boldsymbol{A}\in\mathbb{R}^{i \times j}$ and a $j \times k$ matrix $\boldsymbol{B}\in\mathbb{R}^{j \times k}$ into a $i \times k$ matrix $\boldsymbol{C}\in\mathbb{R}^{i \times k}$.

## Definition

A matrix multiplication, also known as a *dot product*, recombines the entries of two matrices $\boldsymbol{A}\in\mathbb{R}^{i \times j}$ and $\boldsymbol{B}\in\mathbb{R}^{j \times k}$ into a new matrix $\boldsymbol{C}\in\mathbb{R}^{i \times k}$, whose entries are derived as an *inner product* between the entries along the rows of $\boldsymbol{A}$ and columns of $\boldsymbol{B}$. Assume that each matrix $\mathbf{A}$ and $\mathbf{B}$ comprises of entries with subscripts denoting their row and column

$$
\mathbf{A} = \left[ 
    \begin{matrix} 
    a_{1,1} && a_{1,2} && \dots && a_{1,j} \\
    a_{2,1} && a_{2,2} && \dots && a_{2,j} \\
    \vdots && \vdots && \vdots && \vdots \\
    a_{i,1} && a_{i,2} && \dots && a_{i,j} \\
    \end{matrix} \right], \mathbf{B} = \left[ 
    \begin{matrix} 
    b_{1,1} && b_{1,2} && \dots && b_{1,k} \\
    b_{2,1} && b_{2,2} && \dots && b_{2,k} \\
    \vdots && \vdots && \vdots && \vdots \\
    a_{j,1} && a_{j,2} && \dots && a_{j,k} \\
    \end{matrix} \right].
$$

In that case, the entry in the $i$-th row and $k$-th column matrix $\mathbf{C}$ can be derived from an inner product between the $i$-th row of $\mathbf{A}$ and the $k$-th column of $\mathbf{B}$:

$$
c_{i,k} = \sum_{n=1}^{j} a_{i,n} b_{n,k} = a_{i,1} b_{1,k} + a_{i,2} b_{2,k} + \dots + a_{i,j} b_{j,k}
$$

## Intuition

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/matrix_multiplication.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Hover over the entries of the matrices to see how the rows and columns of the matrices on the left side of the equation combine into entries of the matrix on the right side.
    </div>
</div>

The element above illustrates this recombination in practice.