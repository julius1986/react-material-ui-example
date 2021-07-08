# Basics of material-ui

Для стилизации material-ui испльзует JSS в качестве семантики.
JSS(библиотека) — стилизация css на языке Javascript в декларативном стиле весом в 6кб, без учета установки плагинов. JSS не компилируется в inline-style и может повторно переиспользоваться, избегая конфликтов, за счет генерации уникальных имен классов. Имеет возможность работать посредством server-side в nodejs и имеет расширение [.js]. В jss нет ограничения на установку стилей для псевдо-селекторов или псевдо-элементов и подобном. Описывается jss в стиле camelCase. Одной из ключевых возможностей jss — возможность архитектурного подхода в описании стилей.

## makeStyles/useStyles

Является аналогом для withStyles. makeStyles/useStyles - используются в только функциональных компонентах.

- создаем стили, для необходимых классов, вне компонента.

```JS
const useStyles1 = makeStyles({
  root: {
    color: "gold",
    border: "1px solid black",
  },
});
```

- затем инициализурем в компоненте и передаем в classes компонента.

```JS
const classes = useStyles2();

return (
    <div>
        ...
        <Button classes={classes}>
          Click me
        </Button>
        ...
    </div>
  );
```

## withStyles

Создает классы стилей для классовых компонентов, так же можно использовать и для функциональных. Обарачивает нужный нам компонент с нужными стилями.

- простой способ обернуть компонент, применив к нему наши стили.

```JS
const NewButtonComponent = withStyles({
  root: {
    color: "white",
    border: "1px solid black",
  },
})(Button);
```

- Так же можно обернуть текущий компонент. Оборачивать можно классовые и функциональные компоненты.

```JS
function FunctionalComponentExample({classes, ...props}) {
    return (
        <Button classes={classes} {...props} variant="contained" color="primary">
            Click me
        </Button>
    )
}

const someStyles = withStyles({
    root: {
      color: "#7FFFD4",
    },
  });

export default someStyles(FunctionalComponentExample);
```


## createStyles

Создает классы к которым можно обращаться через точку. classes.root | classes.myOwnClass.

- создаем стили 

```JS
const stylesButton = createStyles({
  root: {
    color: "coral",
    border: "1px solid black",
  },
});
```

- После чего применяем их в аттрибуте style

```JS
return (
    <Button style={stylesButton.root} variant="contained" color="primary">
        Click me
    </Button>
)
```

## Передача или переопределение классов

Передачи конкретных классов осуществляется в className.
```HTML
<el className={withStylesObj.root}> 
```
Для перегрузки классов передаем в classes.
```HTML
<el classes={makeStylesObj}> 
```
<strong>Вжно.</strong> В classes можно просто передать обьект с названиями классов.
```HTML
<el classes={{root:"button", label:"button-label"}}> 
```