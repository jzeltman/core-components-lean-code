# A little Tease...

This submission for the lean code competition aims to show how much can be done with core components - from the perspective of a frontend developer who happens to be very familiar with AEM. This submission includes no custom Java or HTL code, but rather only CSS and JavaScript. As you'll see, there's much that can be done with core components and the style system. 

I've called this submission 'A little Tease' as the Teaser component is heavily featured. After evaluating the provided design file, I mapped the design elements to the core components, and found that the teaser component could meet the requirements for many of the design patterns in the Adobe XD file. 

The other innovation here is leveraging the popular and powerful TailwindCSS framework. Although Tailwind might seem antithetical to BEM styling due to it's focus on atomic utility classes, it's a perfect fit with BEM nomenclature. Tailwind's power packed PostCSS plugins enable us to enforce consistent styling across large projects by allowing us to utilize the PostCSS `@apply` rule and use all that Tailwind provides by default. Additionally Tailwind is perfect for use with AEM as it allows for multiple levels of configuration, which is great for multi-site AEM configurations.

The Teaser component has 6 variants to cover many of the patterns on the site. The Container component is used throughout as well to provide width restrictions and spacing. The default header experience fragment was leveraged with one small difference - re-ordering the search and language components. The List component was used in the footer along with experience fragments to implement the design. 

I've included a content package with the pages recreated from the design, along with their style system options for easy installation. 

## Usage

- AEM 6.5.0
- Installation
    - `mvn clean install -PautoInstallSinglePackage`
        - While testing, there have been times when the ui.apps project doesn't get properly built installed while using the `mvn clean install -PautoInstallSinglePackage` build profile.
        - If this happens run the `mvn clean install -PautoInstallPackage` profile from ui.apps, then the clientlibs get run through properly.
- Install content package - muzik.ui.content-1.0.0-SNAPSHOT - using the package manager

## Modules

The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* it.tests: Java based integration tests
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, and templates
* ui.content: contains sample content using the components from the ui.apps
* ui.config: contains runmode specific OSGi configs for the project
* ui.frontend: an optional dedicated front-end build mechanism (Angular, React or general Webpack project)
* ui.tests: Selenium based UI tests
* all: a single content package that embeds all of the compiled modules (bundles and content packages) including any vendor dependencies

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

To build all the modules and deploy the `all` package to a local instance of AEM, run in the project root directory the following command:

    mvn clean install -PautoInstallSinglePackage

Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallSinglePackagePublish

Or alternatively

    mvn clean install -PautoInstallSinglePackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

Or to deploy only a single content package, run in the sub-module directory (i.e `ui.apps`)

    mvn clean install -PautoInstallPackage

## Testing

There are three levels of testing contained in the project:

### Unit tests

This show-cases classic unit testing of the code contained in the bundle. To
test, execute:

    mvn clean test

### Integration tests

This allows running integration tests that exercise the capabilities of AEM via
HTTP calls to its API. To run the integration tests, run:

    mvn clean verify -Plocal

Test classes must be saved in the `src/main/java` directory (or any of its
subdirectories), and must be contained in files matching the pattern `*IT.java`.

The configuration provides sensible defaults for a typical local installation of
AEM. If you want to point the integration tests to different AEM author and
publish instances, you can use the following system properties via Maven's `-D`
flag.

| Property | Description | Default value |
| --- | --- | --- |
| `it.author.url` | URL of the author instance | `http://localhost:4502` |
| `it.author.user` | Admin user for the author instance | `admin` |
| `it.author.password` | Password of the admin user for the author instance | `admin` |
| `it.publish.url` | URL of the publish instance | `http://localhost:4503` |
| `it.publish.user` | Admin user for the publish instance | `admin` |
| `it.publish.password` | Password of the admin user for the publish instance | `admin` |

The integration tests in this archetype use the [AEM Testing
Clients](https://github.com/adobe/aem-testing-clients) and showcase some
recommended [best
practices](https://github.com/adobe/aem-testing-clients/wiki/Best-practices) to
be put in use when writing integration tests for AEM.

### UI tests

They will test the UI layer of your AEM application using Selenium technology. 

To run them locally:

    mvn clean verify -Pui-tests-local-execution

This default command requires:
* an AEM author instance available at http://localhost:4502 (with the whole project built and deployed on it, see `How to build` section above)
* Chrome browser installed at default location

Check README file in `ui.tests` module for more details.

## ClientLibs

The frontend module is made available using an [AEM ClientLib](https://helpx.adobe.com/experience-manager/6-5/sites/developing/using/clientlibs.html). When executing the NPM build script, the app is built and the [`aem-clientlib-generator`](https://github.com/wcm-io-frontend/aem-clientlib-generator) package takes the resulting build output and transforms it into such a ClientLib.

A ClientLib will consist of the following files and directories:

- `css/`: CSS files which can be requested in the HTML
- `css.txt` (tells AEM the order and names of files in `css/` so they can be merged)
- `js/`: JavaScript files which can be requested in the HTML
- `js.txt` (tells AEM the order and names of files in `js/` so they can be merged
- `resources/`: Source maps, non-entrypoint code chunks (resulting from code splitting), static assets (e.g. icons), etc.

## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
