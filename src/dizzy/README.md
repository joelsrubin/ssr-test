# Dizzy

## Usage

### 1. Install Dependencies and Dev Dependencies

```
yarn add @stitches/react react-icons @radix-ui/react-select
yarn add -D @ladle/react
```

### 2. Start up the ladle so inspect your components

Replace `"src/dizzy/**/*.stories.{js,jsx,ts,tsx}"` with the location you installed your components
Change the config path to the .ladle folder in your dizzy folder

```
yarn ladle serve   --stories="src/dizzy/**/*.stories.{js,jsx,ts,tsx}"   --config="src/dizzy/.ladle"
```

    