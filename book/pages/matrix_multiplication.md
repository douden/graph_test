```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}$ | matrices or vectors |
| $\cdot$ | matrix multiplication |
```

# Matrix multiplication

**Summary.** A matrix multiplication combines a $i \times j$ matrix $\boldsymbol{A}\in\mathbb{R}^{i \times j}$ and a $j \times k$ matrix $\boldsymbol{A}\in\mathbb{R}^{j \times k}$ into a $i \times k$ matrix $\boldsymbol{C}\in\mathbb{R}^{i \times k}$.

## Definition

Let us assume a collection of $n=1,\dots,N$ sets of a dependent variable of interest $y_{n}$ and $D$ explanatory variables $\{\boldsymbol{x}_{n}\}_{n=1}^{N}=\{x_{n,1},x_{n,2},\dots,x_{n,D}\}_{n=1}^{N}$. A linear regression seeks a linear function that establishes a relationship between both variable types

$$
y_{n} = y_{n}^{\text{lf}} + \epsilon_{n} = \underbrace{c_{0} + c_{1}x_{n,1} + c_{2}x_{n,2} + \dots + c_{D}x_{n,D}}_{\text{linear fit }y_{n}^{\text{lf}}} + \epsilon_{n},
$$

where the coefficients ${c_{0},\dots,c_{D}}$ define the linear function. Since most such relationships are not perfectly linear, we also require a residual term $\epsilon_{n}$ that accounts for the deviation between the linear fit $y_{n}^{\text{lf}}$ and the true value of the dependent variable $y_{n}$. Specifically, a linear regression seeks the set of coefficients $\{c_{0},\dots,c_{D}\}$ that minimizes the square of the samples' residuals $\{\epsilon_{n}\}_{n=1}^{N}$. The optimal coefficients can be found with a variety of different methods such as least squares estimation.

## Intuition

<div style="float: right; width: 50%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/matrix_multiplication.html" style="width: 100%; aspect-ratio: 1 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Drag the handles to adjust the linear regression. Try to find the optimal fit. Observe how the average residuals and the residual ratio change.
    </div>
</div>

A useful way of thinking about a linear regression is that we are seeking a *line* (in 2-D), a *plane* (in 3-D), or a *hyper-plane* (in higher dimensions) that is as close as possible to all samples. If we use least squares estimation to find the optimal linear function, the objective function penalizes the sum of squared residuals of all samples. This has the consequence that samples, which deviate the farthest from the linear function, excert the strongest "pull" on the linear regression. The consequence is a linear function that pierces the cloud of points along its longest axis, and balances the residuals above and below the linear function.