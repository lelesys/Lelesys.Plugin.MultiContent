<?php

namespace Lelesys\Plugin\MultiContent\TypoScript;

/*                                                                              *
 * This script belongs to the package " Lelesys.Plugin.MultiContent".           *
 *                                                                              *
 * It is free software; you can redistribute it and/or modify it under          *
 * the terms of the GNU Lesser General Public License, either version 3         *
 * of the License, or (at your option) any later version.                       *
 *                                                                              */

use TYPO3\Flow\Annotations as Flow;

/**
 * A TypoScript object which calculates a Fluid variable of grid column span
 *
 */
class GridCalculator extends \TYPO3\TypoScript\TypoScriptObjects\AbstractTypoScriptObject {

	/**
	 * @return mixed|void
	 */
	public function evaluate() {
		$context = $this->tsRuntime->getCurrentContext();
		$node = $context['node'];
		$layoutPieces = explode('-', $node->getParent()->getProperty('layout'));
		$columnSpan = ceil(0.12 * $layoutPieces[$context['columIterator']['index']]);
		return $columnSpan;
	}
}
?>
