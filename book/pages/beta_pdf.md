(summary)=

# Beta pfd

**Summary.** A beta pdf is a common type of {doc}`probability density function <probability_density_function>` defined over the unit interval $0 \leq x \leq 1$.

:::{div}
:class: tags-box

**Tags:** <span class="tag-pill">{doc}`probability density function <probability_density_function>`</span> 

:::

<!-- hidden-tag:statistics -->

## Definition

A beta {doc}`probability density function <probability_density_function>` is defined as

$$
p(x) = \frac{x^{\alpha - 1} (1 - x)^{\beta - 1}}{B(\alpha, \beta)}, \quad 0 < x < 1,
$$

where $B(\alpha, \beta)$ is the *Beta function*. This Beta function is, in turn, defined as

$$
B(\alpha, \beta) = \int_0^1 t^{\alpha - 1} (1 - t)^{\beta - 1} dt = \frac{\Gamma(\alpha) \Gamma(\beta)}{\Gamma(\alpha + \beta)},
$$

where $\Gamma$ is the Gamma function. The parameters $\alpha$ and $\beta$ must both be larger than one ($\alpha,\beta \geq 1$) and affect the shape of the pdf: high values of $\alpha$ shift the pdf towards the right, high values of $\beta$ shift the pdf towards the left.

## Intuition

Beta pdfs have an interesting interpretation related to random coin flips. Let us assume that we are given a coin and are interested in finding out whether it is fair. A fair coin should result result in an equal proportion of "Heads" and "Tails" if we would flip it infinitely often. But if as we flip the coin, what is our best guess regarding the frequency with which this coin yields "Heads" or "Tails"?

Let us assign specific outcomes via the `random variable <random_variable>` $x: \{\text{Tails},\text{Heads}\} \mapsto \{0, 1}$. Before we flip the coin for the first time, we have no idea if the coin is fair or not. This corresponds to a beta pdf with parameters $\alpha = \beta = 1$, resulting in a uniform pdf between $0$ and $1$. Now if we flip the coin for the first time and get $\text{Heads} \mapsto 1$, we increment $\alpha$ by one, resulting in a linear pdf that drops to zero at $x=0$. This is because with this single coinflip, we have proven that the coin can generate "Heads", so the probability density at $x=0$ drops to zero (the probability density at $x=0$ corresponds to the possibility that the coin *only* generates $\text{Tails}$, which has just been disproven). Likewise, the first time we generate $\text{Tails}$, the probabilty density at $1$ drops to zero.Experiment with the interactive element and observe how the resulting beta distribution changes, and how we become increasingly confident in the frequency with which the coin generates either outcome.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/beta_pdf.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Click the "Flip Coin" buttons to simulate the flip of a fair coin. Observe how the beta pdf changes in response, become increasingly more narrow and closing in on $0.5$ as we flip more and more coins.
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $x$ | continuous random variable |
| $p(x)$ | probability density function |
| $\alpha, \beta$ | shape parameters |
| $B$ | Beta Function |
| $\Gamma$ | Gamma function |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>
