(summary)=

# Random variable

**Summary.** A random variable is a numerical value that represents the outcome of a random phenomenon, assigning a number to each possible result in a probability space.

:::{div}
:class: tags-box

**Tags:**

:::

<!-- hidden-tag:statistics -->

## Definition

A random variable is a function that assigns a numerical value to each outcome in a sample space of a random phenomenon. Random variables are usually associated with probability distributions and quantify the outcomes of probabilistic events, allowing for mathematical analysis and predictions.

## Intuition

In simpler terms, a random variable is simply a mathematical object that assigns numbers to conceptual things. These things are usually the outcomes of random processes, such as *upward-facing side of six-sided die has six eyes* → 6 or *height of a random tree in this forest* → 19.46 meters. The numbers obtained through this random variable can then act as input to a probability distribution, which returns a probability or probability density associated with this specific outcome. 

The element below illustrates an example. While each individual tree in the forest may have a concrete height, picking one at random repeatedly will yield different heights at different frequencies. A random variable *tree height* assigns to each individual tree receives a concrete number corresponding to its height, and plugging this number into the associated probability distribution informs us how common this height is in the whole forest.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/random_variable.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Drag the grey circle on the left side to adjust the height of the tree. Observe how the random variable *tree height* and the associated height bracket in the probability distribution change.
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}$ | matrices or vectors |
| $a, b, c$ | array entries |
| $i, j, k$ | array dimensions |
| $i \times j$ | $i$-by-$j$ (matrix dimensions) |
| $\cdot$ | dot product |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
</div>